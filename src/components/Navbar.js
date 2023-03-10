import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import HydraLogo from '../hydraLogo.svg'
import { useGlobalContext } from '../context'
const Navbar = () => {
  const {}=useGlobalContext();
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to='/'>
            <img src={HydraLogo} alt={logo} className='logo'/>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
