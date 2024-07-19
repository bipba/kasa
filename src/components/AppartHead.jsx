import React from 'react'
import "./AppartHead.scss";







function AppartHead({flat}) {
 
  const {name} = flat.host
  // const [firstName,lastName]=name.split()
  return (
    <div className='appart__head'>
    <div className='appart__title'>
         <h2>{flat.title}</h2>
            <h3>{flat.location}</h3>
          <div className='appart__tags'>
 
          {flat.tags.map((tag)=>(
          <span key={tag} className='appart__tag' >{tag}</span>))}
          
          </div>
    </div>
    <div className='appart__host'>
        <div className='appart__host__grid'>
            <span className='alex'>{name}</span>
            <div className='appart__host__pins'>
              <img src={flat.host.picture} alt="" />
            </div>
        </div>
        <div className='appart__details__rate'> 

      {[1,2,3,4,5].map((num)=>(
        <span 
          key ={num}className={flat.rating >= num ? "up" : ""}>★</span>
      ))}
      </div>
        </div>
</div>
  )
}

export default AppartHead