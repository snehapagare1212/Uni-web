import React from 'react'
import './Hero.css'
import wra from '../../assets/wra.png'

const Hero = () => {
  return (
   <div className='hero container'>
        <div className="hero-text">

        <h1>Welcome to Edusity University</h1>
        <p>Welcome to ABC University, a place where knowledge, innovation, and excellence come together. 
Our university is committed to providing quality education, encouraging creativity, and helping 
students build successful careers. With experienced faculty, modern facilities, and a vibrant 
learning environment, we prepare students to achieve their goals and become future leaders.</p>
<button className='btn'>Explore More</button>

<img src={wra} alt="" />



        </div>
      
    </div>
  )
}

export default Hero
