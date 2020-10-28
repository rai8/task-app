import React from 'react'
import uniqid from 'uniqid'

const Overview = ({ tasks }) => {
  return (
    <>
      <div className='task-list'>
        {tasks.map(task => {
          return (
            <ul className='list-group'>
              <li className='list-group-item' key={uniqid()}>
                {task}
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default Overview
