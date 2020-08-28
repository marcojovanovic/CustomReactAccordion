import React,{useState} from 'react'

import logo from '../images/logo.svg'
import {Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

function Navbar() {


  const [showNav, setShowNav]=useState(false)


  const handleNavbar = () =>{

      setShowNav(!showNav)

  }

  return (
    <div className='container'>

      <div className='nav-container'>


      <div className='navbar-content'>
      <img src={logo} className='img-responsive' alt='' />
      <ul className={`nav-list ${showNav  ? ' nav-links' : 'show-nav'}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rooms'>Rooms</Link></li>
      </ul>
     
    
    </div>
 <div onClick={handleNavbar} className='nav-bar'>
          <FaBars />
      </div>

      </div>
     
    </div>
    
  )
}

export default Navbar
