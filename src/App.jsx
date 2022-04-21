import React, {useState} from "react";
import Tasks from "./components/Tasks";

import "./App.css";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid';


const App = () => {

  // let message = "Hello World"
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Java Script',
      completed: false,
    },

    {
      id: '2',
      title: 'Estudar React',
      completed: false,
    },

    {
      id: '3',
      title: 'Estudar Node',
      completed: false,
    },

  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  return(
    <div className="container">
      <h1 className="titulo-principal">Minhas Tarefas</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;