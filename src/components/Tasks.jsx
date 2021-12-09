import React from 'react';

import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleTaskClick={handleTaskClick}
					handleDeleteTask={handleDeleteTask}
				/>
			))}
		</>
	);
}

export default Tasks;
