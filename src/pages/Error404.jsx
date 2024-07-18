import React from 'react'
import "./Error404.scss";
import Navbar from '../Layouts/header/Navbar';
import Main from '../Layouts/container/Main';
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className='error'>
        <Main>
        <Navbar/>
          <img src="404.png" alt="Error 404" />
          <p> Oups ! La page que vous demandez n'existe pas.</p>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </Main>
    </div>
  )
}

export default Error404