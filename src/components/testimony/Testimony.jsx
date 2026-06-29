import React from 'react'
import './Testimony.css'
import fb from '../../assets/backicon.png'
import nb from '../../assets/nexticon.png'
import u1 from '../../assets/user1.png'
import u2 from '../../assets/user2.png'
import u3 from '../../assets/user3.png'
import u4 from '../../assets/user4.png'


const Testimony = () => {
    return (
        <div className='testiomny'>
            <img src={fb} alt="" />
            <img src={nb} alt="" />
            <div className="slider">
               

                <ul>
                    <li>
                        <div className="slide">
                             <img src={u1} alt="" />
                            <div className="userinfo">
                               <h3>Harry Potter</h3>
                                    <span>Hogwarts, Scotland </span>
                            </div>
                        </div>
                         <p>
                                "Joining this university has been one of the best decisions of my life.
                             The supportive faculty, modern facilities, and practical learning environment have helped me grow both academically and personally."

                            </p>
                    </li>

                     <li>
                        <div className="slide">
                             <img src={u2} alt="" />
                            <div className="userinfo">
                               <h3>Harry Potter</h3>
                                    <span>Hogwarts, Scotland </span>
                            </div>
                        </div>
                         <p>
                                "Joining this university has been one of the best decisions of my life.
                             The supportive faculty, modern facilities, and practical learning environment have helped me grow both academically and personally."

                            </p>
                    </li>


                     <li>
                        <div className="slide">
                             <img src={u3} alt="" />
                            <div className="userinfo">
                               <h3>Harry Potter</h3>
                                    <span>Hogwarts, Scotland </span>
                            </div>
                        </div>
                         <p>
                                "Joining this university has been one of the best decisions of my life.
                             The supportive faculty, modern facilities, and practical learning environment have helped me grow both academically and personally."

                            </p>
                    </li>

                     <li>
                        <div className="slide">
                             <img src={u4} alt="" />
                            <div className="userinfo">
                               <h3>Harry Potter</h3>
                                    <span>Hogwarts, Scotland </span>
                            </div>
                        </div>
                         <p>
                                "Joining this university has been one of the best decisions of my life.
                             The supportive faculty, modern facilities, and practical learning environment have helped me grow both academically and personally."

                            </p>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Testimony
