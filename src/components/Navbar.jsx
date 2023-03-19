import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/courses'}>Course</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar