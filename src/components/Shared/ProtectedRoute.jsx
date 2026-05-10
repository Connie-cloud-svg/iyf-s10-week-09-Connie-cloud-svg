import { Navigate } from 'react-router-dom';

// Day 4 — Protected Route
// Redirects to /login if the user is not logged in
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;