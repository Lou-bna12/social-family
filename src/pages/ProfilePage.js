import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import PhotoCard from '../components/PhotoCard';

const memberList = [
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
      'https://res.cloudinary.com/duerbrhc2/image/upload/v1748964115/rbqxjk5pf8zpoepr2vpf.png',
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
];

const ProfilePage = () => {
  const { name } = useParams();
  const [photos, setPhotos] = useState([]);

  const member = memberList.find((m) => m.name === name);

  useEffect(() => {
    const fetchPhotos = async () => {
      const snapshot = await getDocs(collection(db, 'photos'));
      const allPhotos = snapshot.docs.map((doc) => doc.data());
      const filtered = allPhotos.filter((p) => p.author === name);
      setPhotos(filtered);
    };

    fetchPhotos();
  }, [name]);

  if (!member)
    return <div className="p-6 text-center">Membre introuvable 😢</div>;

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto border shadow mb-2"
        />
        <h2 className="text-2xl font-bold">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
      </div>

      <h3 className="text-xl font-semibold text-center mb-4">
        📸 Ses souvenirs
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {photos.length > 0 ? (
          photos.map((photo, index) => <PhotoCard key={index} {...photo} />)
        ) : (
          <p>Aucune photo pour ce membre.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
