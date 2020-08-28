import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'




function Navbar() {

  const [showNavbar,setShowNavbar ]=useState(true)


  const handleToggle=()=>{

      setShowNavbar(!showNavbar)


  }


  return (
    <div className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt=''/>
          </Link>
          <button onClick={handleToggle} type='button' className='nav-btn'>
            <FaAlignRight className='nav-icon'/>
          </button>
        </div>
        <ul className={showNavbar ? 'nav-links show-nav': 'nav-links'}>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/rooms'>Rooms</Link>
    </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
