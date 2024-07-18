import React from 'react';
import './Location.scss';
import { Link } from 'react-router-dom';


function Location(props) {
  // console.log("props dans appart:",props)

return (
<Link to="/locat" state={{
  appartId: props.id
    }}>

    <div className='location'>
    
       <img  src={props.imageUrl} alt="Img photos appartements" />
      <div className='location__subtitle'>{props.title}</div>
      
      </div>
      </Link>

      
  )
}

export default Location