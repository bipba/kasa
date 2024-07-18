import React, { useEffect, useState } from 'react'
import "../pages/LocationPage.scss"
import { DescriptionPancarte} from '../components/DescriptionPancarte'
import AppartHead from '../components/AppartHead'
import ImgBanner from '../components/ImgBanner'
import { useLocation } from 'react-router-dom'
import { Value } from 'sass'



function locationPage() {
  const location = useLocation()
  console.log("location:", location)
  console.log ("appart id c'est ncool:",location.state.appartId)
const [selectedFlat,setSelectedFlat]=useState(null)
  useEffect(fetchDataAppart, [])
  function fetchDataAppart(){
    fetch ("./../src/datas/db.json")
    .then ((res) => res.json())
    .then ((flats)=>{
    const flat = flats.find((flat)=> flat.id===location.state.appartId)
    setSelectedFlat(flat)
    })
    // .catch (console.error);
  }
  if(selectedFlat == null )return <div>...Loading</div>
  return (
    <div className='appart'>
     {/* {JSON.stringify(selectedFlat)} */}
      <ImgBanner imageUrl={selectedFlat.cover}/>
      {/* <AppartHead title={selectedFlat.title}description ={selectedFlat.description} /> */}
      <AppartHead selectedFlat={selectedFlat}/>
    <div className='Appart__draft__flex'>
      <DescriptionPancarte />
      <DescriptionPancarte/>
    </div>
    </div>
        
     
        
  )
}

export default locationPage