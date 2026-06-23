import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <div className='title'>
        <p>{title}</p>
        <h2>{subtitle} </h2>
    </div>
  )
}

export default Title
