import React from 'react'
import './Contact.css'
import msg from '../../assets/msgicon.png'
import mail from '../../assets/mailicon.png'
import ph from '../../assets/phoneicon.png'
import loc from '../../assets/locationicon.png'

const Contact = () => {
  return (
    
    <div className='contact'>

      <div className="contactcol">
        <div className="msg">
          <h3> Feel Free to contact us </h3>

        </div>
        <p>Feel free to contact us if you have any questions or need assistance. Our team is always ready to help and provide the information you need. We look forward to hearing from you!
        </p>
        <ul>
          <li> <img src={ph} alt='' /> +91 98765 43210</li>

          <li><img src={mail} alt='' />info@university.edu</li>

          <li><img src={loc} alt='' />Address:
            123 University Road, Knowledge Park, Nashik, Maharashtra 422005, India </li>
        </ul>

      </div>

      <div className='contactcol'>

        <form action=''>

          <label>Name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>

          <label>Phone number</label>
          <input type='tel' name='phone' placeholder='Enter your contact' required/>

          <label>Email</label>
          <input type='email' name='email' placeholder='Enter your email' required/>\


        </form>

        <textarea type='text'className='txt' name='text'rows='6' cols='100' placeholder='Ask your queries?'/>

          <button type='submit'className='btn'>Submit</button>

      </div>
     
    </div>
  )
}

export default Contact
