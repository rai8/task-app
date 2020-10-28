import React, { useState } from 'react'
import './App.css'
//import uniqid from 'uniqid'
import Overview from './components/Overview'

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const handleChange = e => {
    e.preventDefault()
    //console.log(e.target.value)
    setTask(e.target.value)
  }
  /* const addTask = () => {
    setTasks([...tasks, task])
  } */
  const handleSubmit = e => {
    e.preventDefault()
    if (task === '') return
    setTasks([].concat(tasks, task))
    setTask('')
    console.log(task)
  }
  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' placeholder='task' className='form-control' onChange={handleChange} value={task} />
            <button className='btn btn-primary btn-block'>Add task</button>
          </div>
        </form>
      </div>
      <Overview tasks={tasks} />
    </div>
  )
}
export default App
