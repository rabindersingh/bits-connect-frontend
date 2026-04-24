import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import VibeMatcher from './pages/VibeMatcher';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import ModerationQueue from './pages/ModerationQueue';
import AnnouncementsPage from './pages/AnnouncementsPage';
import AnnouncementsSubmit from './pages/AnnouncementsSubmit';

import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(localStorage.getItem('guidelines_accepted') === 'true');

  useEffect(() => {
    const savedUser = localStorage.getItem('bitsUser');
    const savedGuidelines = localStorage.getItem('guidelines_accepted');
    if (savedGuidelines === 'true') {
      setGuidelinesAccepted(true);
    }
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
      if (userData.email === 'admin@bits.edu') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('bitsUser', JSON.stringify(userData));
    if (userData.email === 'admin@bits.edu') {
      setIsAdmin(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('bitsUser');
  };

  const handleGuidelinesAccepted = () => {
    setGuidelinesAccepted(true);
    localStorage.setItem('guidelines_accepted', 'true');
  };

  return (
    <Router>
      <div className="app">
        {isLoggedIn && guidelinesAccepted && <Navbar user={user} onLogout={handleLogout} isAdmin={isAdmin} />}
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : !guidelinesAccepted ? (
            <>
              <Route path="/guidelines" element={<AnnouncementsSubmit />} />
              <Route path="*" element={<Navigate to="/guidelines" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/announcements" element={<AnnouncementsPage user={user} />} />
              <Route path="/announcements/submit" element={<AnnouncementsSubmit user={user} />} />
              <Route path="/vibe-matcher" element={<VibeMatcher user={user} />} />
              <Route path="/messages" element={<MessagesPage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} onLogout={handleLogout} />} />
              {isAdmin && (
                <>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/moderation" element={<ModerationQueue />} />
                </>
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
