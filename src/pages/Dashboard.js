import React from 'react';
import { useUser } from '../context/UserContext';
import { useNotifications } from '../context/NotificationContext';

const Dashboard = () => {
  const { user } = useUser();
  const { addNotification } = useNotifications();

  if (!user) return <p>Aucun utilisateur connecté.</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Bienvenue, {user.name}
        </h2>

        <button
          onClick={() => addNotification('Nouvelle tâche ajoutée !')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ajouter une notification
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
