import React, { useEffect, useState } from 'react';
import './GridGallery.scss';
import Location from './Location.jsx';

function GridGallery() {

  const [apparts, setApparts] = useState([]);

  // `useEffect` est utilisé pour exécuter une fonction après le rendu initial du composant
  
  useEffect(fetchApparts, []);

  // fonction pour récupérer les données des appartements à partir du fichier JSON
  function fetchApparts() {
    fetch("./../src/datas/db.json")
      .then((res) => res.json()) 
      .then((res) => setApparts(res)) 
      .catch(console.error); 
  }

 
  return (
    <div className='galleryGrid'>
      {apparts.map((appart) => (
      
        <Location  key={appart.id} id={appart.id} title={appart.title} imageUrl={appart.cover}  />
      ))}
    </div>
  );
}

export default GridGallery;
