import React from 'react'
import { Link } from 'react-router-dom'

export const UserPanel = () => {
  return (
    <div className='dark:text-white text-black'>
      <h1>UserPanel</h1>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}
