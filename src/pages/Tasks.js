import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { useNotifications } from '../context/NotificationContext';

const Tasks = () => {
  const [taskName, setTaskName] = useState('');
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const { addNotification } = useNotifications();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    addTask({ title: taskName });
    addNotification(`Nouvelle tâche : ${taskName}`);
    setTaskName('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#8d6441] mb-4">
        Gestion des Tâches
      </h1>

      {/* Ajout de tâche */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nouvelle tâche"
          className="flex-grow px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Ajouter
        </button>
      </form>

      {/* Liste des tâches */}
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span
              className={
                task.status === 'terminé' ? 'line-through text-gray-400' : ''
              }
            >
              {task.title}
            </span>
            <div className="flex gap-2">
              {task.status === 'en cours' && (
                <button
                  onClick={() => updateTask(index)}
                  className="text-green-600 hover:underline"
                >
                  Terminer
                </button>
              )}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:underline"
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
