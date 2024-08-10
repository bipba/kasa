import React, { useState } from 'react';
import "./ImgBanner.scss";

function ImgBanner(props) {
  // Extraction des images passées en props
  const pictures = props.pictures;

  // État pour suivre l'image actuellement affichée dans le carrousel
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour déterminer la classe CSS à appliquer à une image en fonction de son index
  const getClassName = (i) => {
    // Si l'index de l'image correspond à l'image actuelle, retourner la classe 'show'
    if (i === currentPicture) return "show";
    return ""; // Sinon, retourner une chaîne vide (pas de classe)
  };

  // Fonction pour passer à l'image suivante dans le carrousel
  const moveNext = () => {
    // Incrémentation de l'index de l'image actuelle avec gestion du dépassement en utilisant le modulo
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente dans le carrousel
  const movePrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      // Si l'index est négatif, on retourne à la dernière image du tableau
      setCurrentPicture(pictures.length - 1);
      return;
    }
    // Sinon, on décrémente simplement l'index de l'image actuelle
    setCurrentPicture(currentPicture - 1);
  };

  // Vérifie si des images sont disponibles dans le tableau `pictures`
  const picturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le rendu des images du carrousel
  const getCarouselImg = () => {
   // Si des images sont disponibles, les afficher toutes avec la gestion des classes pour montrer celle en cours
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  // Rendu du composant `ImgBanner`
  return (
    <div className='img__banner'>
      <div className='image__container'>
        {getCarouselImg()} {/* Affiche les images du carrousel */}
      </div>

      {picturesAvailable() && (
        <>
          {/* Bouton pour passer à l'image suivante */}
          <button className='btn btn-next' onClick={moveNext}>
            <i className='fas fa-chevron-right'></i>
          </button>

          {/* Bouton pour revenir à l'image précédente */}
          <button className='btn btn-prev' onClick={movePrevious}>
            <i className='fas fa-chevron-left'></i>
          </button>

          {/* Affiche un compteur indiquant la position de l'image actuelle */}
          <span className='counter-caroussel'>
            {currentPicture + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default ImgBanner;



