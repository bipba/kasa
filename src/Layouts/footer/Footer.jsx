import React from 'react';
import './Footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div>
        <img src="footerLogo.png" alt="Logo du site Kasa" />
      <div className='footer__link'>
        © 2020 Kasa. All rights reserved
      </div>
      </div>
    </div>
  )
}

export default Footer;