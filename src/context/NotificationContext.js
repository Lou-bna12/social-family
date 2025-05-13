import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
export const NotificationContext = createContext();

// Hook personnalisé pour accéder facilement au contexte
export const useNotifications = () => useContext(NotificationContext);

// Fournisseur de contexte
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Ajouter une notification
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Supprimer une notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
