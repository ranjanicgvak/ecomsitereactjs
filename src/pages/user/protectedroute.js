import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './authcontext';

const ProtectedRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;
