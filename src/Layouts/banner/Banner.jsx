import React from 'react'
import './Banner.scss'

function Banner({image,children}) {
  return (
    <div className='banner'>
      <img src={image} alt="" />
      {children}
    </div>
  )
}

export default Banner