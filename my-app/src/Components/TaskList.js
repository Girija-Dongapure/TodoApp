import React, { useState } from 'react';

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskCompletion }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    editTask(id, editText);
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editId === task.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span>
              {task.text}
            </span>
          )}

          {editId === task.id ? (
            <button onClick={() => saveEdit(task.id)}>Save</button>
          ) : (
            <>
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
