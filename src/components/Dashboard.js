import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useDashboard } from '../context/DashboardContext';
import { 
  ArrowLeft, 
  RefreshCw, 
  Maximize2, 
  Minimize2
} from 'lucide-react';

const DashboardContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: var(--background-dark);
`;

const DashboardHeader = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`;

const DashboardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DashboardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color || 'var(--gradient-primary)'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: var(--shadow-glow);
`;

const DashboardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DashboardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
`;

const DashboardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DashboardContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`;

const IframeContainer = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.isFullscreen ? '100vh' : '80vh'};
  transition: height 0.3s ease;
`;

const PowerBIIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
  allow: "fullscreen"
`;

const LoadingOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 15, 35, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  color: var(--text-secondary);
  font-weight: 500;
`;

const ErrorMessage = styled(motion.div)`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  margin: 2rem 0;
`;




function Dashboard() {
  const { id } = useParams();
  const { obtenerDashboard } = useDashboard();
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(null);


  const dashboard = obtenerDashboard(id);

  useEffect(() => {
    if (!dashboard) {
      setError('Dashboard no encontrado');
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dashboard]);

  const handleRefresh = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!dashboard) {
    return (
      <DashboardContainer>
        <ErrorMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Dashboard no encontrado</h2>
          <p>El dashboard que buscas no existe o ha sido eliminado.</p>
          <BackButton to="/">
            <ArrowLeft size={16} />
            Volver al inicio
          </BackButton>
        </ErrorMessage>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <DashboardHeader
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderContent>
          <HeaderLeft>
            <BackButton to="/">
              <ArrowLeft size={16} />
              Volver
            </BackButton>
            
            <DashboardInfo>
              <DashboardIcon color={dashboard.color}>
                {dashboard.icono}
              </DashboardIcon>
              <DashboardDetails>
                <DashboardTitle>{dashboard.nombre}</DashboardTitle>
                <DashboardMeta>
                  <span>{dashboard.categoria}</span>
                  <span>•</span>
                  <span>Última actualización: {dashboard.ultimaActualizacion}</span>
                </DashboardMeta>
              </DashboardDetails>
            </DashboardInfo>
          </HeaderLeft>
          
          <HeaderRight>
            <ControlButton onClick={handleRefresh} disabled={isLoading}>
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              Actualizar
            </ControlButton>
            
            <ControlButton onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              {isFullscreen ? 'Salir' : 'Pantalla completa'}
            </ControlButton>
          </HeaderRight>
        </HeaderContent>
      </DashboardHeader>

                                                                                                               <DashboardContent>
          <IframeContainer
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
          <IframeWrapper isFullscreen={isFullscreen}>
            <PowerBIIframe
              src={dashboard.url}
              title={dashboard.nombre}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setError('Error al cargar el dashboard');
                setIsLoading(false);
              }}
            />
            
            <AnimatePresence>
              {isLoading && (
                <LoadingOverlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LoadingSpinner />
                  <LoadingText>Cargando dashboard...</LoadingText>
                </LoadingOverlay>
              )}
            </AnimatePresence>
          </IframeWrapper>
        </IframeContainer>

        {error && (
          <ErrorMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Error al cargar el dashboard</h3>
            <p>{error}</p>
            <ControlButton onClick={handleRefresh}>
              <RefreshCw size={16} />
              Intentar de nuevo
            </ControlButton>
          </ErrorMessage>
        )}
      </DashboardContent>
    </DashboardContainer>
  );
}

export default Dashboard; 