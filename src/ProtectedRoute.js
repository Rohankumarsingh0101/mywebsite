// src/ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom'; // Import Navigate

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;