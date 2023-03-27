import React from 'react'
import { Link } from 'react-router-dom'
import { Darkmode } from '../Darkmode'
import logo from '../../assets/BookLogo2.png'

// const navigation = [
//   { name: "Mars Rover", href: "/mars-rover", current: false },
// ];

export const Navbar = () => {
  // const [isActive, setActive] = useState(false)

  // const menuToggle = () => {
  //   setActive(!isActive)
  // }

  return (
    <nav className=''>
      <div className='mx-auto  px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='w-11 pr-1' />

            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl font-extrabold'>
              BooksIA
            </span>
          </Link>

          {/* menu */}
          <div className='flex'>
            <div className='hidden md:flex mr-10'>
              <button className='bg-emerald-600 text-slate-200 dark:text-white hover:text-gray-900  px-3 py-2 rounded-md text-sm font-medium'>
                Login
              </button>
            </div>
            <div className='flex items-center'>
              <Darkmode />
            </div>
          </div>
          {/* mobile button */}
          {/* <div className="md:hidden">
            <button onClick={menuToggle}>
              {!isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="dark:text-white w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div> */}
        </div>
      </div>
      {/* mobile menu items */}
      {/* <div className={isActive ? "" : "hidden"}>
        {navigation.map((item) => (
          <Link
            className="dark:text-white block p-2 px-4 text-sm hover:text-emerald-700 hover:bg-slate-200 dark:hover:bg-zinc-800"
            key={item.name}
            to={item.href}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div> */}
    </nav>
  )
}
