import React from 'react'
import '../App.css'
const Tasks = ({ tasks }) => {
  return (
    <>
      <div className='task-list'>
        <ul className='list-group'>
          {tasks.map(task => {
            return (
              <li key={task.id} className='list-group-item list-render'>
                <span>{task.text} </span>{' '}
                <span
                  id='icon'
                  onClick={() => {
                    console.log('hello world')
                  }}
                >
                  <i className='fa fa-close'></i>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Tasks
