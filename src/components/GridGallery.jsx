import React, { useEffect, useState } from 'react';
import './GridGallery.scss';
import Location from './Location.jsx';

function GridGallery() {
  // déclaration de l'état local `apparts` pour stocker les données des appartements
  const [apparts, setApparts] = useState([]);

  // `useEffect` est utilisé pour exécuter une fonction après le rendu initial du composant
  //`fetchApparts` est appelé une seule fois lors du montage du composant (comportement similaire à `componentDidMount` en classes)
  useEffect(fetchApparts, []);

  // fonction pour récupérer les données des appartements à partir du fichier JSON
  function fetchApparts() {
    fetch("./../src/datas/db.json")
      .then((res) => res.json()) // conversion de la réponse en format JSON
      .then((res) => setApparts(res)) // mise à jour de l'état local avec les données récupérées
      .catch(console.error); // gestion des erreurs en les affichant dans la console
  }

  // rendu du composant
  return (
    <div className='galleryGrid'>
      {apparts.map((appart) => (
        // pour chaque appartement, on rend un composant `Location` en lui passant les props nécessaires
        <Location  key={appart.id} id={appart.id} title={appart.title} imageUrl={appart.cover}  />
      ))}
    </div>
  );
}

export default GridGallery;
// Gestion de l'état (useState) :

// Le hook useState initialise apparts comme un tableau vide. Cet état sera mis à jour une fois que les données sont récupérées du fichier JSON.
// Effet de cycle de vie (useEffect) :

// Le hook useEffect exécute la fonction fetchApparts une seule fois après que le composant a été monté (équivalent à componentDidMount dans les composants de classe).
// Le second argument, [], signifie que l'effet ne dépend d'aucune variable et ne sera donc exécuté qu'une seule fois.
// Récupération des données (fetch) :

// La fonction fetchApparts utilise fetch pour obtenir des données à partir du fichier db.json. Une fois récupérées, ces données sont converties en format JSON et stockées dans l'état apparts.
// En cas d'échec de la requête, l'erreur est capturée et affichée dans la console.
// Rendu du composant :

// Le composant retourne une div avec la classe galleryGrid qui contient une liste de composants Location.
// Chaque Location reçoit un key unique (l'ID de l'appartement), ainsi que les propriétés title, imageUrl, et id, nécessaires pour son affichage.