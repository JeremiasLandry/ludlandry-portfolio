import React from 'react'
import Card from '../Cards/Card'
import urlPic from './presentation.jpg'
import writingPic from './writing.jpg'

const Home = () => {
  return (
    <div id='Home'>
        <Card
            showImage={true}
            imageUrl={writingPic}
            showDescription={false}
            description={<div className='year'><span>2024</span></div>}
            showButton={false}
            imageOnTop={false}
            cardFat={false}
            stars={0}
        />
        <Card
            showImage={true}
            imageUrl={urlPic}
            showDescription={true}
            description={<div className='presentationCard'><span>Estudiante y Freelancer</span><span><strong>Ludmila Landry</strong></span></div>}
            showButton={true}
            imageOnTop={true}
            cardFat={false}
            stars={0}
        />
        <div className='presentationBanner'>
            <div className='presentationTitles'>
                <p>Portfolio</p>
                <h2><strong>Website</strong></h2>
            </div>
            <div className='presentationDescription'>
                <h3>Introduccion</h3>
                <p>Este portafolio muestra mi habilidad para comprender a fondo a los usuarios, traducir percepciones en soluciones creativas y colaborar eficazmente. </p>
                <p>Cada proyecto cuenta mi historia de superar desafíos y evolucionar mis habilidades.</p>
            </div>
        </div>
    </div>
  )
}

export default Home