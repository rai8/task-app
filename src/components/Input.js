import React, { useState } from 'react'
import '../App.css'

const Input = () => {
  const [name, setName] = useState('')
  const [output, setOutput] = useState([])
  const handleChange = e => {
    let name = e.target.value
    setName(name)

    // console.log(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (output === '') return
    setOutput(name)
    setName('')
  }

  return (
    <div className='container input-area'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='form-control' onChange={handleChange} placeholder='Name' value={name} />
      </form>

      <div>
        <p>My name is {output} </p>
      </div>
    </div>
  )
}

export default Input
