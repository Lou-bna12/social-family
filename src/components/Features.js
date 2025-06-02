// src/components/Features.js
import React from 'react';
import {
  PencilIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';
import '../styles/Features.css';

const features = [
  {
    title: 'Inscrivez-vous facilement',
    description: 'Créez un compte en tant que papa, maman ou enfant',
    icon: <PencilIcon className="h-10 w-10 text-orange-500 mb-4" />,
  },
  {
    title: 'Restez connectés',
    description: 'Écrivez des messages et recevez des notifications',
    icon: (
      <ChatBubbleLeftRightIcon className="h-10 w-10 text-orange-500 mb-4" />
    ),
  },
  {
    title: 'Gérez vos tâches',
    description:
      'Ajoutez, modifiez et consultez la liste des tâches familiales',
    icon: (
      <ClipboardDocumentCheckIcon className="h-10 w-10 text-orange-500 mb-4" />
    ),
  },
];

const Features = () => {
  return (
    <section className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          {feature.icon}
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
