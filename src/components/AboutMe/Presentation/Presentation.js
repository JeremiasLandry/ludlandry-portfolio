import React from 'react'
import aboutMePic from '../aboutmepic.jpg';
import star from '../star.png';
import Card from '../../Cards/Card';

const Presentation = () => {
  return (
    <div id='AboutMe'>

      <div className='about-me-separator-container'>
        <span className='red-pill about-me-pill'>Hola, soy</span>
        <hr className='about-me-separator'/>
        <span className='yellow-pill about-me-pill'>Sobre mi</span>
      </div>

      <div className='about-me-content'>
        <div className='about-me-description'>
          <div className='about-me-name'>
            <span>Ludmila</span><img className='about-me-star' src={star}/><br/>
            <span className='about-me-star-group'><img src={star}/><img src={star}/></span><span><strong>Landry</strong></span>
          </div>
          <div>
            <Card
                showImage={false}
                showDescription={true}
                description={<span>Soy Ludmila Landry, estudiante de Diseño Multimedia con enfoque creativo y centrado en la experiencia del usuario. A lo largo de mi carrera académica,participé activamente en proyectos prácticos relacionados al diseño UX/UI.<br/>
                Mi compromiso con comprender las historias de los usuarios impulsó la creación de experiencias auténticas y la elaboración de interfaces intuitivas que trascienden lo estético.</span>}
                showButton={true}
                cardFat={true}
                stars={0}
                boxOnly={true}
            />
          </div>
        </div>
        <div className='about-me-pic'>
          <img src={aboutMePic} alt='Foto mia de introduccion'/>
          <span></span>
        </div>
      </div>

    </div>
  )
}

export default Presentation