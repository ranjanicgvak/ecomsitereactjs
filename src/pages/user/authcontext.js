import React, { createContext, useContext, useState } from 'react';
import { fakeAuth } from './fakeAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(fakeAuth.isAuthenticated);

  const login = (callback) => {
    fakeAuth.login(() => {
      setIsAuthenticated(true);
      callback();
    });
  };

  const logout = (callback) => {
    fakeAuth.logout(() => {
      setIsAuthenticated(false);
      callback();
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
