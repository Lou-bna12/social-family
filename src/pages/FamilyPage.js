import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';

const FamilyPage = () => {
  const [members, setMembers] = useState([
    {
      name: 'Loubna',
      role: 'Maman',
      avatar:
        'https://res.cloudinary.com/duerbrhc2/image/upload/v1748965213/loubna_fxkedj.jpg',
    },
    {
      name: 'Ahcene',
      role: 'Papa',
      avatar:
        'https://res.cloudinary.com/duerbrhc2/image/upload/v1748966169/ahcene_dod7n6.jpg',
    },
    {
      name: 'Élyne',
      role: 'Fille',
      avatar:
        'https://res.cloudinary.com/duerbrhc2/image/upload/v1748965241/elyne_ylsk8p.jpg',
    },
    {
      name: 'Sohan',
      role: 'Fils',
      avatar:
        'https://res.cloudinary.com/duerbrhc2/image/upload/v1748965200/sohan_c95dhz.jpg',
    },
    {
      name: 'Junaïd',
      role: 'Bébé',
      avatar:
        'https://res.cloudinary.com/duerbrhc2/image/upload/v1748965227/junaid_xttqpr.jpg',
    },
  ]);

  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    avatar: '',
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember.name && newMember.role && newMember.avatar) {
      setMembers([...members, newMember]);
      setNewMember({ name: '', role: '', avatar: '' });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">👨‍👩‍👧‍👦 Notre Famille</h2>

      <form
        onSubmit={handleAddMember}
        className="max-w-md mx-auto mb-6 bg-white shadow-md rounded-lg p-4 space-y-4"
      >
        <h3 className="font-semibold text-lg text-center">
          ➕ Ajouter un membre
        </h3>
        <input
          type="text"
          placeholder="Nom"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Rôle (ex: Maman, Papa)"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          placeholder="URL de l'avatar (Cloudinary)"
          value={newMember.avatar}
          onChange={(e) =>
            setNewMember({ ...newMember, avatar: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#a9825c] hover:bg-[#926d49] text-white px-4 py-2 rounded w-full"
        >
          Ajouter
        </button>
      </form>

      <div className="flex flex-wrap gap-6 justify-center">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            onDelete={() => {
              const updated = [...members];
              updated.splice(index, 1);
              setMembers(updated);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyPage;
