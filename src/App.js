import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate ,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user is already logged in on not
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (user) => {
    // Set user data in local storage for persistence
    localStorage.setItem('user', JSON.stringify(user));
    setUserData(user);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard userData={userData} /> : <Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;