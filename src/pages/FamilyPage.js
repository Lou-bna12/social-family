import React from 'react';
import MemberCard from '../components/MemberCard';

const members = [
  {
    name: 'Loubna',
    role: 'Maman',
    avatar:
      '	https://res.cloudinary.com/duerbrhc2/image/upload/v1748965213/loubna_fxkedj.jpg',
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

const FamilyPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">👨‍👩‍👧‍👦 Notre Famille</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyPage;
