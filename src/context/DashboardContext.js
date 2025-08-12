import React, { createContext, useContext, useState, useMemo } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard debe ser usado dentro de un DashboardProvider');
  }
  return context;
};

// Función para obtener la fecha y hora actual formateada
const obtenerFechaActual = () => {
  const ahora = new Date();
  const año = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');
  const hora = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  
  return `${año}-${mes}-${dia} ${hora}:${minutos}`;
};

export const DashboardProvider = ({ children }) => {
  // Usar useMemo para generar los dashboards con fecha actual cada vez que se recarga
  const dashboards = useMemo(() => [
    {
      id: 'yego_lima',
      nombre: 'Yego Lima',
      descripcion: 'Dashboard de métricas y análisis para la operación de Yego en Lima',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiYmJjNWRiODgtMTdiNS00ODc1LWFkODMtMDE4ZWQ2ZjE1ODlkIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#dc2626',
      icono: '🏙️',
      categoria: 'Operaciones',
      ultimaActualizacion: obtenerFechaActual()
    },
    {
      id: 'yego_barranquilla',
      nombre: 'Yego Barranquilla',
      descripcion: 'Métricas y KPIs de la operación de Yego en Barranquilla',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiY2Q3YTYwZWItNGMzMy00OWFiLTlkMTAtNWFlYWJmMjQyNGM5IiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#ef4444',
      icono: '🌊',
      categoria: 'Operaciones',
      ultimaActualizacion: obtenerFechaActual()
    },
    {
      id: 'yego_cucuta',
      nombre: 'Yego Cúcuta',
      descripcion: 'Dashboard completo de análisis para Cúcuta',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMTBlN2U3ZmUtOTNlNS00ZDRkLWE5ZTItNWI3OWRiNWJjMmY2IiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#7f1d1d',
      icono: '🏢',
      categoria: 'Operaciones',
      ultimaActualizacion: obtenerFechaActual()
    },
    {
      id: 'yego_bogotá',
      nombre: 'Yego Bogota',
      descripcion: 'Análisis de rendimiento y métricas de Bogota',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiOTE2Yjg3M2MtZmI3Ny00MmI4LTlmZDAtMDQ1ZTMyOGVlYjVmIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#b91c1c',
      icono: '🌸',
      categoria: 'Operaciones',
      ultimaActualizacion: obtenerFechaActual()
    },
    {
      id: 'yego_bucaramanga',
      nombre: 'Yego Bucaramanga',
      descripcion: 'Dashboard de métricas para la operación en Bucaramanga',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMmM4ZDgxNTAtOGVhNS00ZTI2LTkxZjQtMDI3ODQ4ZTdjMjA3IiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
      color: '#dc2626',
      icono: '🌴',
      categoria: 'Operaciones',
      ultimaActualizacion: obtenerFechaActual()
    }
  ], []); // El array vacío como dependencia hace que se recalcule en cada render

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