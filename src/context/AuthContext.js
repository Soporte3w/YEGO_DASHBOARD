import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Siempre pedir login al cargar la aplicación
    setIsAuthenticated(false);
    setIsLoading(false);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    // No guardar en localStorage para que siempre pida login
  };

  const logout = () => {
    setIsAuthenticated(false);
    // No es necesario remover de localStorage
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 