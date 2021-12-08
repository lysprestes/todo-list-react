import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import TaskDetails from './components/TaskDetails';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false
    },
    {
      id: 2,
      title: 'Learn Redux',
      completed: false
    }
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task, completed: !task.completed
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  const handleAddTask = (taskTitle) => {
    const newTask = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ]
    setTasks(newTask)
  }

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    // <Router>
    //   <div className="container">
    //     <Header />
    //     <Routes>
    //       <Route
    //         exact path="/"
    //         render={() => (
    //           <>
    //             <AddTask handleAddTask={handleAddTask} />
    //             <Tasks
    //               tasks={tasks}
    //               handleTaskClick={handleTaskClick}
    //               handleDeleteTask={handleDeleteTask}
    //             />
    //           </>
    //         )} 
    //       />
    //       <Route
    //         exact path="/:taskTitle"
    //         render={TaskDetails}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact path="/"
            render={() => (
              <>
                <AddTask handleAddTask={handleAddTask} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleDeleteTask={handleDeleteTask}
                />
              </>
            )}
          />
          <Route path="/:taskTitle" component={TaskDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
