import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const HeaderHome = () => {
  return (
    <>
        {/* <!-- Navbar --> */}
        <header
      className="bg-blue-500 text-white p-4 flex justify-between items-center"
    >
      <nav className="flex space-x-4">
        <Link to="/home" className="text-white text-lg">Home</Link>
        <Link to="/add" className="text-white text-lg">Add vehicle</Link>
        <Logout/>
      </nav>
    </header>
    </>
  )
}

export default HeaderHome