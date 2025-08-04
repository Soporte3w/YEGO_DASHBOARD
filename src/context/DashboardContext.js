import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard debe ser usado dentro de un DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [dashboards] = useState([
    {
      id: 'yego_lima',
      nombre: 'Yego Lima',
      descripcion: 'Dashboard de métricas y análisis para la operación de Yego en Lima',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiZTk1MWIxODYtNDdhNi00ZjE3LTgyMzQtNjI2NWFkYTkxMWEwIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#dc2626',
      icono: '🏙️',
      categoria: 'Operaciones',
            ultimaActualizacion: '2024-01-15'
    },
    {
      id: 'yego_barranquilla',
      nombre: 'Yego Barranquilla',
      descripcion: 'Métricas y KPIs de la operación de Yego en Barranquilla',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYOUR_EMBED_URL_HERE',
      color: '#ef4444',
      icono: '🌊',
      categoria: 'Operaciones',
      ultimaActualizacion: '2024-01-13'
    },
    {
      id: 'yego_bogota',
      nombre: 'Yego Bogotá',
      descripcion: 'Dashboard completo de análisis para Bogotá',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYOUR_EMBED_URL_HERE',
      color: '#7f1d1d',
      icono: '🏢',
      categoria: 'Operaciones',
      ultimaActualizacion: '2024-01-12'
    },
    {
      id: 'yego_medellin',
      nombre: 'Yego Medellín',
      descripcion: 'Análisis de rendimiento y métricas de Medellín',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYOUR_EMBED_URL_HERE',
      color: '#b91c1c',
      icono: '🌸',
      categoria: 'Operaciones',
      ultimaActualizacion: '2024-01-11'
    },
    {
      id: 'yego_cali',
      nombre: 'Yego Cali',
      descripcion: 'Dashboard de métricas para la operación en Cali',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYOUR_EMBED_URL_HERE',
      color: '#dc2626',
      icono: '🌴',
      categoria: 'Operaciones',
      ultimaActualizacion: '2024-01-10'
    }
  ]);

  const [dashboardActivo, setDashboardActivo] = useState(null);

  const obtenerDashboard = (id) => {
    return dashboards.find(dashboard => dashboard.id === id);
  };

  const obtenerDashboardsPorCategoria = (categoria) => {
    return dashboards.filter(dashboard => dashboard.categoria === categoria);
  };

  const valor = {
    dashboards,
    dashboardActivo,
    setDashboardActivo,
    obtenerDashboard,
    obtenerDashboardsPorCategoria
  };

  return (
    <DashboardContext.Provider value={valor}>
      {children}
    </DashboardContext.Provider>
  );
}; 