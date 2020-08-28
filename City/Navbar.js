import React from 'react'
import Logo from '../logo.png'
import '../App.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary p-1">
      <div className='navbar-logo ml-5'>
      <img src={Logo} alt='logo' className='navbar-brand' />
      </div>
      
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active p-3">
        <a className="nav-link text-light" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item p-3 ml-5">
        <a className="nav-link text-light" href="about.html">About</a>
      </li>
      <li className="nav-item p-3 ml-5">
        <a className="nav-link text-light" href="city.html">City</a>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
