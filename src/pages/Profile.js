import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Profil de l'utilisateur</h2>

      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Rôle : {user.role}</p>
        </div>
      ) : (
        <p>Aucun utilisateur connecté.</p>
      )}
    </div>
  );
};

export default Profile;
