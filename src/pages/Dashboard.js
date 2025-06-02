import React from 'react';
import { useNotifications } from '../context/NotificationContext';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  const { addNotification } = useNotifications();

  const handleAddNotification = () => {
    const message = 'Nouvelle notification';
    addNotification(message);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Bienvenue, {user?.name}</h2>
      <button
        onClick={handleAddNotification}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ajouter une notification
      </button>
    </div>
  );
};

export default Dashboard;
