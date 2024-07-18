import React from 'react'
import "./ImgBanner.scss";

function ImgBanner(props) {
  return (
    <div className='img__banner'>
            <img src={props.imageUrl} alt="Photo Appartements"/>
        </div>
  )
}

export default ImgBanner