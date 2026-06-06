import React from 'react'
import './Program.css'
import Program1 from '../../assets/Program1.png'
import Program2 from '../../assets/Program2.png'
import Program3 from '../../assets/Program3.png'
import Programi1 from '../../assets/Programi1.png'
import Programi2 from '../../assets/Programi2.png'
import Programi3 from '../../assets/Programi3.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program1} alt="" />
            <div className="caption">
                <img src={Programi1} alt="" />
                <p>Graduation</p>
            </div>

        </div>

          <div className='program'>
            <img src={Program2} alt="" />
            <div className="caption">
                <img src={Programi2} alt="" />
                <p>Masters</p>
            </div>

        </div>

          <div className='program'>
            <img src={Program3} alt="" />
            <div className="caption">
                <img src={Programi3} alt="" />
                <p>Ph.D</p>
            </div>

        </div>
      
    </div>
  )
}

export default Program
