import React from 'react'
import './Navbar.scss'
import { NavLink, Link} from 'react-router-dom'
function Navbar() {
  function styleLink (){
    
  }
//navlink permet de recharger une ui en local au lieu d'une nouvelle page url sans aller dans le serveur
  return(
    <nav className='navbar'>
    <Link to="/">
      <div >
        <img className='navbar__logo'src="logo.png" alt="Logo Kasa" />
      </div>
      </Link>
      <NavLink to={`/`} style={styleLink()}>
    <div>Accueil</div>
    </NavLink>
 
   <NavLink to={`/aPropos`}>
   <div>À propos</div>
    </NavLink>
 
    
    </nav>
  )
}

export default Navbar





// function Navbar() {

//   return (
//    <nav className='navbar'>
//     <div>
//     <img src="./../../Src/assets/logo.png" alt="Logo du site KASA" />
//    </div>
//    <ul>
//     <li>
//       <NavLink to="/">acceuil</NavLink>
//     </li>
//     <li> 
//       <NavLink to="/about">À propos</NavLink>
//      </li>
//    </ul>
//    </nav>
//   )
// }
