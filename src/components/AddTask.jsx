import React, { useState } from 'react';

import Button from './Button';
import './AddTask.css';

const AddTask = ({handleAddTask}) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleSubmit = (e) => {
    handleAddTask(inputData);
    setInputData('');
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleSubmit}>Add Task</Button>
      </div>
    </div>
  );
}

export default AddTask;