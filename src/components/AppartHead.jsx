import React from 'react'
import "./AppartHead.scss";
function AppartHead(props) {
  const flat=props.selectedFlat
  const name = flat.host.name
  // const [firstName,lastName]=name.split()
  return (
    <div className='appart__head'>
    <div className='appart__title'>
         <h2>{flat.title}</h2>
            <h3>{flat.location}</h3>
          <div className='appart__tags'>
            {/* <span className='appart__tag'>Cozy</span>
            <span className='appart__tag'>Canal</span>
            <span className='appart__tag'>Paris 10</span> */}
          {flat.tags.map((tag)=>(<span key={tag}>{tag}</span>))}
          
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
        <span className={props.selectedFlat.rating >= num ? "up" : ""}>★</span>
      ))}
      </div>
        </div>
</div>
  )
}

export default AppartHead