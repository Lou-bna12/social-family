import React from 'react';
import { useUser } from '../context/UserContext';
import { useTasks } from '../context/TaskContext';
import { useNotifications } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useUser();
  const { tasks } = useTasks();
  const { notifications } = useNotifications();
  const navigate = useNavigate();

  const tasksEnCours = tasks.filter((t) => t.status === 'en cours').length;
  const tasksTerminees = tasks.filter((t) => t.status === 'terminé').length;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#8d6441] mb-4">
        Bienvenue, {user?.name} 👋
      </h1>

      {/* Bloc Infos utilisateur */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Vos informations</h2>
        <p>
          <strong>Email :</strong> {user?.email}
        </p>
        <p>
          <strong>Rôle :</strong> {user?.role}
        </p>
      </div>

      {/* Bloc Tâches */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Tâches</h2>
        <p>📝 En cours : {tasksEnCours}</p>
        <p>✅ Terminées : {tasksTerminees}</p>
      </div>

      {/* Bloc Notifications */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        {notifications.length === 0 ? (
          <p>Pas de notifications récentes</p>
        ) : (
          <ul className="list-disc pl-4 text-sm text-gray-600">
            {notifications.map((n) => (
              <li key={n.id}>{n.text}</li> // ✅ Affiche uniquement le texte
            ))}
          </ul>
        )}
      </div>

      {/* Lien vers profil */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/profile')}
          className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
        >
          Accéder à mon profil
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
