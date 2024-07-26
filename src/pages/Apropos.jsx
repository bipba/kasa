import React from 'react'
import Banner from '../Layouts/banner/Banner'
import { DescriptionPancarte } from '../components/DescriptionPancarte'
import ImgBanner from '../components/ImgBanner'

function Apropos() {
  return (
    <>
    <ImgBanner/>
    <DescriptionPancarte title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
    <DescriptionPancarte title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <DescriptionPancarte title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <DescriptionPancarte title="Responsabilité" content="La sécurité est la priorioté de Kasa. Aussi vien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'ôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </>
  )
}

export default Apropos