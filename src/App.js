// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import { UserProvider } from './context/UserContext';
import { NotificationProvider } from './context/NotificationContext';
import { TaskProvider } from './context/TaskContext';
import { MessagesProvider } from './context/MessagesContext';
import PrivateRoute from './components/PrivateRoute';
import FamilyPage from './pages/FamilyPage';
import Gallery from './pages/Gallery';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <UserProvider>
        <NotificationProvider>
          <TaskProvider>
            <MessagesProvider>
              <div className="min-h-screen flex flex-col justify-between">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    {/* Routes publiques */}
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/famille" element={<FamilyPage />} />

                    {/* Routes privées */}
                    <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/tasks"
                      element={
                        <PrivateRoute>
                          <Tasks />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <PrivateRoute>
                          <Profile />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/messages"
                      element={
                        <PrivateRoute>
                          <Messages />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/galerie"
                      element={
                        <PrivateRoute>
                          <Gallery />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/membre/:name"
                      element={
                        <PrivateRoute>
                          <ProfilePage />
                        </PrivateRoute>
                      }
                    />
                  </Routes>
                </main>
                <Footer />
              </div>
            </MessagesProvider>
          </TaskProvider>
        </NotificationProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
