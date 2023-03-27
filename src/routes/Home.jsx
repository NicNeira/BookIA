import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <h1 className='dark:text-white'>Esta es la pagina de inicio</h1>
      <Link to='user-panel' className='dark:text-white'>
        Go to user-panel
      </Link>
      <Link to='chat' className='dark:text-white'>
        Go to chat
      </Link>
    </div>
  )
}
