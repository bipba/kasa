import React, { useEffect, useState } from 'react'
import "../pages/LocationPage.scss"
import { DescriptionPancarte} from '../components/DescriptionPancarte'
import AppartHead from '../components/AppartHead'
import ImgBanner from '../components/ImgBanner'
import { useLocation } from 'react-router-dom'
import { Value } from 'sass'



function locationPage() {
  const location = useLocation()
  //quand le state (selectedFlat)change le composant est rerender
const [flat,setflat]=useState(null)
  useEffect(fetchDataAppart, [])
  function fetchDataAppart(){
    fetch ("./../src/datas/db.json")
    .then ((res) => res.json())
    .then ((flats)=>{
    const flat = flats.find((flat)=> flat.id===location.state.appartId)
    setflat(flat)
    })
    // .catch (console.error);
  }
  if(flat == null )return <div>...Loading</div>
  return (
    <div className='appart'>
   
      <ImgBanner imageUrl={flat.cover}/>
      {/* <AppartHead title={selectedFlat.title}description ={selectedFlat.description} /> */}
      <AppartHead flat={flat}/>
    <div className='Appart__draft__flex'>
      <DescriptionPancarte title = "Description" content={flat.description}/>
      <DescriptionPancarte title = "Equipements" content= {flat.equipments.map(eq=><li>{eq}</li>)}/>
    </div>
    </div>
        
     
        
  )
}

export default locationPage