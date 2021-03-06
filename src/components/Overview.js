import React from 'react'
import uuid from 'react-uuid'

const Overview = ({ tasks }) => {
  return (
    <>
      <div className='task-list'>
        <ul className='list-group'>
          {tasks.map(task => {
            return (
              <li key={uuid()} className='list-group-item list-render'>
                <span>{task} </span>{' '}
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

export default Overview
