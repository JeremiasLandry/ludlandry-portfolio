import React from 'react'
import Separator from '../../Separator/Separator'
import Card from '../../Cards/Card'
import CHBanner from './coderhousebanner.jpg';
import Davinci from './davinci.jpg';
import FreelancerExp from './jobexperience.jpg'

const Education = () => {
  return (
    <div id='Education'>
        <Separator title="Educación" pilltext='Inicio'/>
        <div className='fatCardGallery'>
            <Card
                showImage={true}
                imageUrl={Davinci}
                showDescription={true}
                description={<div className='threetexts'>
                    <span><strong>Tecnicatura en Diseño Multimedial</strong></span>
                    <span className='subtitle'>Escuela Da Vinci 2022 - Actualidad</span>
                    <span>Esta tecnicatura, me prepara para la comunicación transmedia, programación, desarrollo de apps y páginas web, e-commerce, marketing digital, publicidad, posproducción de cine y sonido, motion graphics, animación 3D, captura de movimiento, mapping, diseño gráfico digital, inteligencia artificial, diseño de videojuegos para advergaming, realidad virtual, y realidad aumentada, entre otras especialidades.</span>
                    </div>}
                showButton={true}
                imageOnTop={true}
                cardFat={true}
                stars={1}
            />
            <Card
                showImage={true}
                imageUrl={CHBanner}
                showDescription={true}
                description={<div className='threetexts'>
                    <span><strong>Curso avanzado Diseño UX/UI</strong></span>
                    <span className='subtitle'>Coderhouse , 2021 - Finalizado</span>
                    <span>Se abordaron temas como la investigación de usuarios, el diseño visual, la arquitectura de la información, la creación de prototipos con herramientas especializadas, la usabilidad y las pruebas de interfaces. También aprendí sobre el diseño responsive y a aplicar los conocimientos adquiridos en proyectos prácticos para desarrollar habilidades prácticas.</span>
                    </div>}
                showButton={true}
                imageOnTop={true}
                cardFat={true}
                stars={2}
            />
        </div>
        <Separator title="Experiencia Laboral" pilltext='Inicio'/>
        <div className='fatCardGallery'>
        <Card
                showImage={true}
                imageUrl={FreelancerExp}
                showDescription={true}
                description={<div className='threetexts'>
                    <span><strong>Banco Galicia - Customer Service Officer</strong></span>
                    <span className='subtitle'>Junio 2022 - Actualidad</span>
                    <span>Atención telefónica a los clientes, resolviendo sus consultas y asesorando sobre productos bancarios. El objetivo principal es asegurar la satisfacción del cliente y mantener relaciones positivas garantizando un servicio eficiente. Es importante desarrollar la capacidad de comunicación efectiva, empatía y habilidades de resolución de problemas para tener éxito.</span>
                    </div>}
                showButton={true}
                imageOnTop={true}
                cardFat={true}
                stars={1}
            />
            <Card
                showImage={true}
                imageUrl={FreelancerExp}
                showDescription={true}
                description={<div className='threetexts'>
                    <span><strong>Diseñadora Freelancer</strong></span>
                    <span className='subtitle'>2020 - Actualidad</span>
                    <span>Diseño creando experiencias digitales efectivas y atractivas, desde la investigación inicial hasta la implementación final, trabajando de manera independiente para clientes y proyectos educativos.</span>
                    </div>}
                showButton={true}
                imageOnTop={true}
                cardFat={true}
                stars={2}
            />
        </div>
    </div>
  )
}

export default Education