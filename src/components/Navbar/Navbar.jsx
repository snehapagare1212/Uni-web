import React, { use, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
 const [bg,setbg]=useState(false);
 
 useEffect(()=>{
  window.addEventListener('scroll',()=>{
window.scrollY > 500 ? setbg(true):setbg(false);

  })



 },[]);

  return (
    

        <nav className={`container ${bg?'darknav':''}`}>
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
