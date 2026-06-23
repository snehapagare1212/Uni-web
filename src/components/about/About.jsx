import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import icon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
<div className='aboutL'>
        <img src={about} className='fimage'/>

        <img src={icon} className='simage'/>
      
    </div>
 <div className="aboutR">
    <h2>About University</h2>
    <h3>We create leaders for tomorrow</h3>
    <p>At XYZ University, we believe education is more than earning a degree—it is about developing future leaders who can make a positive impact on society. Our academic programs combine knowledge, innovation, and practical experience to help students build the confidence and skills needed to lead in their chosen fields. Through a supportive learning environment, we encourage students to think critically, solve problems, and embrace new challenges.</p>
    <p>Our university is committed to creating leaders by providing opportunities for personal and professional growth. Students participate in leadership workshops, community service projects, research activities, and industry collaborations that help them develop communication, teamwork, and decision-making skills. These experiences prepare graduates to excel in a rapidly changing global environment.</p>
    <p>At XYZ University, leadership is at the heart of everything we do. We inspire students to become responsible, ethical, and innovative leaders who contribute to the success of their communities and organizations. With experienced faculty, modern facilities, and a strong focus on excellence, XYZ University empowers students to achieve their goals and shape a brighter future for themselves and the world.</p>

      </div>


    </div>
    
  )
}

export default About
