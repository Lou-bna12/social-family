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
import { UserProvider } from './context/UserContext';
import { NotificationProvider } from './context/NotificationContext';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <NotificationProvider>
          <TaskProvider>
            <div className="min-h-screen flex flex-col justify-between">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </TaskProvider>
        </NotificationProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
