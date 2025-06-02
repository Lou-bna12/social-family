import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const Tasks = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim()) {
      addTask(newTask);
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Gestion des Tâches</h2>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Titre"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 rounded flex-1"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="border p-2 rounded flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>
      </form>

      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => updateTask(index)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Terminer
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
