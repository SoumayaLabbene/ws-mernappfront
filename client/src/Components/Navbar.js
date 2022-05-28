import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/allcontacts">Contacts</Link>
      <Link to="/add">ADD</Link>
    </div>
  )
}

export default NavBar
