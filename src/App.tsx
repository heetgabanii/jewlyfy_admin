import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import PrivateRoute from './routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            {/* Protected Routes */}
            <Route element={<PrivateRoute>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </PrivateRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
