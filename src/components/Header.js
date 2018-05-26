import React from 'react'
import Logo from '../../images/danlubbers-logo.png'
import Hamburger from 'react-icons/lib/fa/bars'

const Header = () => (
  <div className='header'>
    <img className='header-logo' src={Logo}/>   
    <nav>
      <ul className='desktop-nav'>
        <li>ABOUT</li>
        <li>WEBDEV</li>
        <li>CONTACT</li>
      </ul>
    </nav> 
    <div className='mobile-nav'>
      <Hamburger />
    </div>
  </div>
)

export default Header
