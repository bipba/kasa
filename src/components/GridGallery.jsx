import React, { useEffect, useState } from 'react';
import './GridGallery.scss';
import Location from './Location.jsx';

function GridGallery() {
  const [apparts, setApparts]= useState([]);
// component didMount execute la function au chargement 
useEffect(fetchApparts,[]);
function fetchApparts(){
  fetch ("./../src/datas/db.json")
  .then ((res) => res.json())
  .then ((res)=>setApparts(res))
  .catch (console.error);
}
    // console.log("myArray:", myArray)
  return (
    <div className='galleryGrid'>
    {apparts.map ((appart)=>(
      <Location key={appart.id} title={appart.title} imageUrl={appart.cover} id={appart.id}/>
    ))}
   </div>
  );
}

export default GridGallery;