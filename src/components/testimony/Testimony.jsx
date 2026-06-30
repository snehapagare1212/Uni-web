import React, { useRef } from 'react'
import './Testimony.css'
import fb from '../../assets/backicon.png'
import nb from '../../assets/nexticon.png'
import u1 from '../../assets/user1.png'
import u2 from '../../assets/user2.png'
import u3 from '../../assets/user3.png'
import u4 from '../../assets/user4.png'



const Testimony = () => {

    const slide =useRef();
    let tx=0;
    const fbt =()=>
    {
        if (tx> -50)
        {
            tx-=25;
            slide.current.style.transform=`translateX(${tx}%)`
        }
    };

    const nbt =()=>
    {
        if (tx <0)
        {
            tx+=25;
            slide.current.style.transform=`translateX(${tx}%)`
        }
    };







    return (
        <div>
        <div className='testimony'>
            <img src={fb} alt="" className='fb' onClick={nbt}/>
            <img src={nb} alt="" className='nb' onClick={fbt}/>
            <div className="slider">

                <ul ref={slide}>
                   <li>
    <div className="slide">
        <div className="userinfo">
            <img src={u1} alt="" />
            <div>
                <h3>Harry Potter</h3>
                <span>Hogwarts, Scotland</span>
            </div>
        </div>

        <p>
            "Joining this university has been one of the best decisions of my life.
            The supportive faculty, modern facilities, and practical learning environment
            have helped me grow both academically and personally."
        </p>
    </div>
</li>

                   <li>
    <div className="slide">
        <div className="userinfo">
            <img src={u2} alt="" />
            <div>
                <h3>Harry Potter</h3>
                <span>Hogwarts, Scotland</span>
            </div>
        </div>

        <p>
            "Joining this university has been one of the best decisions of my life.
            The supportive faculty, modern facilities, and practical learning environment
            have helped me grow both academically and personally."
        </p>
    </div>
</li>
<li>
    <div className="slide">
        <div className="userinfo">
            <img src={u3} alt="" />
            <div>
                <h3>Harry Potter</h3>
                <span>Hogwarts, Scotland</span>
            </div>
        </div>

        <p>
            "Joining this university has been one of the best decisions of my life.
            The supportive faculty, modern facilities, and practical learning environment
            have helped me grow both academically and personally."
        </p>
    </div>
</li>

                  <li>
    <div className="slide">
        <div className="userinfo">
            <img src={u4} alt="" />
            <div>
                <h3>Harry Potter</h3>
                <span>Hogwarts, Scotland</span>
            </div>
        </div>

        <p>
            "Joining this university has been one of the best decisions of my life.
            The supportive faculty, modern facilities, and practical learning environment
            have helped me grow both academically and personally."
        </p>
    </div>
</li>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default Testimony
