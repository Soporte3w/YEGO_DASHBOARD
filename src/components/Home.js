import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useDashboard } from '../context/DashboardContext';
import { BarChart3, ArrowRight, Calendar } from 'lucide-react';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const DashboardsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  
  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const DashboardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DashboardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-card);
    text-decoration: none;
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const DashboardIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.color || 'var(--gradient-primary)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const DashboardInfo = styled.div`
  flex: 1;
`;

const DashboardName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`;

const DashboardCategory = styled.span`
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
`;

const DashboardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const DashboardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastUpdate = styled.div`
  color: var(--text-secondary);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ViewButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.875rem;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: var(--transition);
  box-shadow: var(--shadow-glow);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(220, 38, 38, 0.4);
    text-decoration: none;
  }
`;

function Home() {
  const { dashboards } = useDashboard();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
                 <HeroTitle
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
         >
           <span className="gradient-text">YEGO</span> Dashboards
         </HeroTitle>
        
                 <HeroSubtitle
           initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           Plataforma de análisis y monitoreo operacional de YEGO con dashboards de Power BI.
         </HeroSubtitle>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CTAButton to="/dashboard/yego_lima">
            <BarChart3 size={20} />
            Acceder al Sistema
            <ArrowRight size={20} />
          </CTAButton>
        </motion.div>
             </HeroSection>

       <DashboardsSection>
        <SectionTitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Dashboards <span className="gradient-text">Disponibles</span>
        </SectionTitle>
        
        <DashboardsGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {dashboards.map((dashboard, index) => (
            <DashboardCard
              key={dashboard.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              color={dashboard.color}
              as={Link}
              to={`/dashboard/${dashboard.id}`}
            >
              <DashboardHeader>
                <DashboardIcon color={dashboard.color}>
                  {dashboard.icono}
                </DashboardIcon>
                <DashboardInfo>
                  <DashboardName>{dashboard.nombre}</DashboardName>
                  <DashboardCategory>{dashboard.categoria}</DashboardCategory>
                </DashboardInfo>
              </DashboardHeader>
              
              <DashboardDescription>
                {dashboard.descripcion}
              </DashboardDescription>
              
              <DashboardFooter>
                <LastUpdate>
                  <Calendar size={14} />
                  {dashboard.ultimaActualizacion}
                </LastUpdate>
                <ViewButton>
                  Ver Dashboard
                  <ArrowRight size={16} />
                </ViewButton>
              </DashboardFooter>
            </DashboardCard>
          ))}
        </DashboardsGrid>
      </DashboardsSection>
    </HomeContainer>
  );
}

export default Home; 