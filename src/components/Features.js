import React from 'react';
import {
  PencilIcon,
  ChatBubbleOvalLeftIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/solid';

const features = [
  {
    icon: <PencilIcon className="w-12 h-12 text-orange-600" />,
    title: 'Inscrivez-vous facilement',
    description: 'Créez un compte en tant que papa, maman ou enfant',
  },
  {
    icon: <ChatBubbleOvalLeftIcon className="w-12 h-12 text-orange-600" />,
    title: 'Restez connectés',
    description: 'Écrivez des messages et recevez des notifications',
  },
  {
    icon: <ClipboardDocumentListIcon className="w-12 h-12 text-orange-600" />,
    title: 'Gérez vos tâches',
    description:
      'Ajoutez, modifiez et consultez la liste des tâches familiales',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Ce que vous pouvez faire
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
