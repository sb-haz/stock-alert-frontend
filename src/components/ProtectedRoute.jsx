// Component to protect routes that require authentication
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  return children;
};