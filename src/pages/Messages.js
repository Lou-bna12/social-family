import React, { useState } from 'react';
import { useMessages } from '../context/MessagesContext';
import { useUser } from '../context/UserContext';
import Toast from '../components/Toast';

const Messages = () => {
  const { user } = useUser();
  const { messages, addMessage, deleteMessage } = useMessages();
  const [text, setText] = useState('');
  const [toast, setToast] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addMessage(text, user?.name || 'Anonyme');
      setText('');
      setToast('Message envoyé ✔️');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#8d6441] mb-4">Mur familial</h1>

      <form onSubmit={handleSend} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Écrire un message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Envoyer
        </button>
      </form>

      {toast && <Toast message={toast} onClose={() => setToast('')} />}

      <ul className="space-y-3">
        {messages.map((msg) => (
          <li key={msg.id} className="bg-white p-3 rounded shadow">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                <strong>{msg.author}</strong> – {msg.date}
              </p>
              {msg.author === user?.name && (
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Supprimer
                </button>
              )}
            </div>
            <p className="mt-1">{msg.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
