import React from 'react'
import Separator2 from '../Separator/Separator2'
import star from '../AboutMe/star.png'
import finalBannerPic from './trabajemosjuntos.jpg'
import footericon1 from './logos/CeluPNG.png'
import footericon2 from './logos/GmailPNG.png'
import footericon3 from './logos/LinkedInPNG.png'


const Footer = () => {
  return (
    <>
      <div id='Footer'>
        <Separator2/>
        <div className='finalBanner'>
          <div className='finalBanner-text'>
            <p><strong>Trabajemos</strong></p>
            <span>juntos <img className='littlestar finalbanner' src={star}/><img className='littlestar finalbanner' src={star}/></span>
          </div>
          <img src={finalBannerPic} className='finalBannerImg'/>
        </div>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='yellow-pill randompill footerpillcontainer'>
            <img className='footericon' src={footericon1}/>
            <span>+54 11 3014 4905</span>
          </div>
          <hr className='footerseparator'/>
          <div className='yellow-pill randompill footerpillcontainer'>
            <img className='footericon' src={footericon1}/>
            <span>ludmila.landry@davinci.edu.ar</span>
          </div>
          <hr className='footerseparator'/>
          <div className='yellow-pill randompill footerpillcontainer'>
            <img className='footericon' src={footericon1}/>
            <span>/ludmila-landry</span>
          </div>
        </div>
      </footer>
      </div>
        
      
    </>
  )
}

export default Footer