// ✅ src/pages/Messages.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useMessages } from '../context/MessagesContext';
import { useNotifications } from '../context/NotificationContext';
import QuickNav from '../components/QuickNav';

const Messages = () => {
  const { user } = useUser();
  const { messages, sendMessage, deleteMessage } = useMessages();
  const { notifications } = useNotifications();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };

  // 🧪 DEBUG ici :
  console.log('➡️ notifications[0] :', notifications[0]);
  console.log('➡️ notifications[0]?.text :', notifications[0]?.text);
  console.log(
    '➡️ Type de notifications[0]?.text :',
    typeof notifications[0]?.text
  );

  return (
    <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-6">
      <QuickNav />

      {notifications.length > 0 && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded shadow">
          📣 {notifications[0].text}
        </div>
      )}

      <h1 className="text-xl sm:text-2xl font-bold text-[#8d6441] mb-6 text-center sm:text-left">
        Messagerie Familiale
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Écrire un message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
        >
          Envoyer
        </button>
      </form>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucun message pour le moment.
        </p>
      ) : (
        <ul className="space-y-3">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="bg-white p-4 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="w-full">
                <p className="text-gray-800">{msg.text}</p>
                <p className="text-sm text-gray-500">
                  {msg.author} —{' '}
                  {new Date(msg.timestamp?.toDate()).toLocaleString()}
                </p>
              </div>
              {msg.uid === user?.uid && (
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="text-red-600 hover:underline self-end sm:self-auto"
                >
                  Supprimer
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;
