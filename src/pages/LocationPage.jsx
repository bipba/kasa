import React, { useEffect, useState } from 'react'
import "../pages/LocationPage.scss"
import { DescriptionPancarte} from '../components/DescriptionPancarte'
import AppartHead from '../components/AppartHead'
import ImgBanner from '../components/ImgBanner'
import { useLocation } from 'react-router-dom'

function locationPage() {
  const location = useLocation();  // Utilise `useLocation` pour accéder aux paramètres passés via le routing

  const [flat, setFlat] = useState(null);  // Initialise l'état `flat` à `null`

  // Fonction pour récupérer les données de l'appartement depuis le fichier JSON
  useEffect(fetchDataAppart, []);
  function fetchDataAppart() {
    fetch("./../src/datas/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.appartId);  // Trouve l'appartement correspondant à l'ID
        setFlat(flat);  // Met à jour l'état `flat` avec les données de l'appartement trouvé
      });
      // .catch(console.error); // Gestion d'erreur désactivée
  }

  // Affiche un message de chargement tant que les données ne sont pas prêtes
  if (flat == null) return <div>...Loading</div>;

  // Rendu du composant une fois les données prêtes
  return (
    <div className='appart'>
       {/* Affiche la bannière d'images */}
      <ImgBanner pictures={flat.pictures} />
      {/* // Affiche l'en-tête de l'appartement avec les détails   */}
      <AppartHead flat={flat} />  
      <div className='Appart__draft__flex'>
        <DescriptionPancarte title="Description" content={flat.description} />
        <DescriptionPancarte 
          title="Equipements" 
          content={flat.equipments.map((eq, i) => (<li key={i}>{eq}</li>))} />
      </div>
    </div>
  )
}

export default locationPage;




