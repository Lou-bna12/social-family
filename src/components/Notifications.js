import React from 'react';
import { useNotifications } from '../context/NotificationContext';

const Notifications = () => {
  const { notifications, removeNotification } = useNotifications();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
      <h3 className="font-bold text-lg mb-2">Notifications</h3>
      <ul className="space-y-2">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className="bg-gray-100 p-2 rounded flex justify-between items-center"
          >
            <span>{notif.message}</span>
            <button
              onClick={() => removeNotification(notif.id)}
              className="text-red-500 hover:text-red-600"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
