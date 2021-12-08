import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';

import './Task.css';

const Task = ({ task, handleTaskClick, handleDeleteTask }) => {
  return (
    <div
      className="task-container"
      style={ task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
      >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="delete-button"
          onClick={() => handleDeleteTask(task.id)}
        >
          <CgClose />
        </button>
        <button
          className="datails-button"
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
}

export default Task;