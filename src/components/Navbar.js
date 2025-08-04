import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Menu, X, Home, TrendingUp, LogOut } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid var(--primary-color);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: var(--transition);
  position: relative;
  
  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
  
  &.active {
    color: var(--primary-color);
    background: rgba(220, 38, 38, 0.1);
    text-decoration: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: var(--transition);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    background: var(--gradient-primary);
    transform: scale(1.05);
    text-decoration: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: var(--transition);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: translateY(-1px);
  }
`;

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
                 <NavContent>
           <LogoLink to="/">
             <LogoImage src="/imagenes/yego.png" alt="YEGO Logo" />
           </LogoLink>
          
          <NavLinks>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              <Home size={16} style={{ marginRight: '0.5rem' }} />
              Inicio
            </NavLink>
            <NavLink to="/dashboard/yego_lima" className={location.pathname.includes('/dashboard') ? 'active' : ''}>
              <TrendingUp size={16} style={{ marginRight: '0.5rem' }} />
              Dashboards
            </NavLink>
            <LogoutButton onClick={logout}>
              <LogOut size={16} />
              Cerrar Sesión
            </LogoutButton>
          </NavLinks>
          
          <MobileMenuButton onClick={() => setMenuAbierto(true)}>
            <Menu size={24} />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      <AnimatePresence>
        {menuAbierto && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={cerrarMenu}>
              <X size={32} />
            </CloseButton>
            
            <MobileNavLink to="/" onClick={cerrarMenu}>
              <Home size={24} />
              Inicio
            </MobileNavLink>
            
            <MobileNavLink to="/dashboard/yego_lima" onClick={cerrarMenu}>
              <TrendingUp size={24} />
              Dashboards
            </MobileNavLink>
            
            <MobileNavLink as="button" onClick={() => { logout(); cerrarMenu(); }}>
              <LogOut size={24} />
              Cerrar Sesión
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar; 