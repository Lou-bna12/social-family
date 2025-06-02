// src/pages/Tasks.js
import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import QuickNav from '../components/QuickNav';

const Tasks = () => {
  const [title, setTitle] = useState('');

  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <QuickNav />
      <h1 className="text-2xl font-bold text-[#8d6441] mb-4">
        Gestion des Tâches
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Ajouter
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">
                {task.author} – {task.status}
              </p>
            </div>
            <div className="flex gap-2">
              {task.status === 'en cours' && (
                <button
                  onClick={() => updateTask(task.id)}
                  className="text-green-600 hover:underline"
                >
                  Terminer
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-600 hover:underline"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
