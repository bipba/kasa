import React, { useState } from 'react'
import "./ImgBanner.scss";

function ImgBanner(props) {
  const pictures = props.pictures

const[currentPicture,setCurrentPicture]=useState(0)
const getClassName = (i) =>{
  if (i === currentPicture) return "show";
  return "";
}
const moveNext = () =>{
  setCurrentPicture((currentPicture+1) %pictures.length)
}
const movePrevious = () =>{
  const newCurentPicture = currentPicture -1
  if (newCurentPicture < 0) {
    setCurrentPicture(pictures.length -1)
    return 
  }
  setCurrentPicture(currentPicture-1) 
}
const picturesAvailable = () =>{
  return pictures && pictures.length > 0
}
const getCarouselImg = () => {
  if (!picturesAvailable()) {
    return (
      <div className='img__banner' style={{ height: '223px' }}>
        <div className='image__container' style={{height: '223px' }}>
          <img src="img4.png" style={{ height: '223px' }} className='show' alt="" />
        </div>
      </div>
    );
  }

return pictures .map((pic, i) => (
<img key={pic} src={pic} alt="" className={getClassName(i)}></img>))
 }

  return (
    <div className='img__banner'>
      <div className='image__container'>
      {getCarouselImg ()}
          </div>
           { picturesAvailable() &&(
           <>
           <button className='btn btn-next' onClick={moveNext}>
              <i className='fas fa-chevron-right'></i>
              </button>
            <button className='btn btn-prev' onClick={movePrevious}>
              <i className='fas fa-chevron-left'></i></button>
            <span className='counter-caroussel'>{currentPicture +1}/{pictures.length}</span>
              </>
              )}
           
            </div>
  )
}

export default ImgBanner