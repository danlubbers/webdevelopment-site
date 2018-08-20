import React from 'react'
import Logo from '../../images/danlubbers-logo.png'
import Hamburger from 'react-icons/lib/fa/bars'
import Mailto from 'react-mailto'

const Header = () => (
  <div className='header'>
    <img className='header-logo' src={Logo} alt='header logo'/>   
    <nav>
      <ul className='desktop-nav'>
        {/* <li>ABOUT</li>
        <li>WEBDEV</li> */}
        <Mailto  className='contact' email="lubbers.dan@gmail.com" obfuscate={true}><li>CONTACT</li></Mailto>
      </ul>
    </nav> 
    {/* <div className='mobile-nav'>
      <Hamburger />
    </div> */}
  </div>
)

export default Header
