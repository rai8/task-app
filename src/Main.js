import React, { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'

const Main = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const handleChange = e => {
    setTask(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (task === '') return
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: task,
      },
    ])
    setTask('')
  }
  /* const handleDelete = id => {
    let updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  } */
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' placeholder='task' className='form-control' onChange={handleChange} value={task} />
          <button className='btn btn-primary btn-block'>Add task</button>
        </div>
      </form>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default Main
