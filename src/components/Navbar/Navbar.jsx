import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    

        <nav className='container'>
          <img src={logo} alt="" className='logo'/>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Testimony</li>
        <li>Gallery</li>
        <li><button className='btn'>Contact</button></li>


    </ul>


        </nav>
      
   
  )
}

export default Navbar
