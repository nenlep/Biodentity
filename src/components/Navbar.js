import React from 'react'
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { useState } from 'react';
import { Button } from './Button';
import './Navbar.css'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const toggle = ()=>{setClick(!click)}
  const closeMobileMenu = ()=>{setClick(false)}

  const showButton = ()=>{
    if(window.innerWidth <= 960){
      setButton(false)
    }
    else{
      setButton(true)
    }
  }
  window.addEventListener('resize', showButton)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className='navbar-icon' />
            BIODENTITY
          </Link>
          <div className="menu-icon" onClick={toggle}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/" className="btn-link">
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>
              ): (
                <Link to="/" className="btn-link">
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
