import React from 'react'
import Banner from '../Layouts/banner/Banner.jsx'
// import Location from './components/Location'
import GridGallery from '../components/GridGallery.jsx'
import './App.scss'

function App() {
  return (
    <>
     <Banner  image="img1.png" >
     <h1>Partout, chez vous et ailleurs</h1>
       </Banner>
      <GridGallery/>
    </>
  )
}

export default App