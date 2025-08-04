import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import { DashboardProvider } from './context/DashboardContext';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--background-dark);
  position: relative;
`;

const BackgroundParticles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.6;
`;

function AppContent() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const [particles] = useState(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20
    }));
  });

  if (isLoading) {
    return (
      <AppContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: 'var(--text-primary)'
        }}>
          Cargando...
        </div>
      </AppContainer>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <DashboardProvider>
      <Router>
        <AppContainer>
          <BackgroundParticles>
            {particles.map((particle) => (
              <Particle
                key={particle.id}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </BackgroundParticles>
          
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/dashboard/:id" 
                element={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Dashboard />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </AppContainer>
      </Router>
    </DashboardProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App; 