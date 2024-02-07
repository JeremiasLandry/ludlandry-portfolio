import React from 'react'
import glamapp from './glamapp.jpg'
import glamapp2 from './glamapp2.jpg'
import Card from '../../Cards/Card'
import Separator from '../../Separator/Separator'
import Separator2 from '../../Separator/Separator2'
import star from '../../AboutMe/star.png'
import process1 from './glamprocess.jpg'
import process2 from './glamprocess2.jpg'
import Pic from '../../Pic/Pic'
import process3 from './glampalette.jpg'
import process4 from './glamtypography.jpg'
import process5 from './glammothericon.jpg'
import process6 from './glamiconsystem.jpg'
import process7 from './glamlowwireframe.jpg'
import process8 from './glamhigherwireframe.jpg'
import process9 from './glamconclusion.jpg'

const Glam = () => {
  return (
    <>
        <div id='Process'>
            
            <div className='fatCardGallery'>
                <div className='proyecto01-card'>
                    <img src={glamapp} className='proyecto01-img'/>
                    <div className='proyecto01-description'>
                        <span>Proyecto 04</span>
                        <div>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction'>
                    <p>Glam APP</p>
                    <Card
                        showImage={true}
                        imageUrl={glamapp2}
                        showDescription={true}
                        description={<div>
                           <span>
                           Para un proyecto de diseño gráfico publicitario,  desarrollé la página web "Glam" con el propósito de simplificar la selección y aplicación de maquillaje. Esta plataforma ofrece opciones de maquillajes que puedes probar mediante la cámara selfie, seguido de la posibilidad de acceder a tutoriales detallados. 
                           Este proceso abarcó todas las fases del diseño de elementos gráficos, desde la creación del logo hasta la selección de tipografías, la definición de la paleta de colores y la creación de íconos.
                           </span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>
            <Separator title='Proceso' pilltext='prototipo funcional' inicioPill={false}/>          
        </div>
        <div className='skills-content'>
                <div className='skills-pics'>
                    <Pic
                    urlPic={process1}
                    stars={1}
                    thin={true}
                    />
                    <Pic
                    urlPic={process2}
                    stars={2}
                    thin={true}
                    />
                </div>
                <div className='skills-info'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>Definición del proyecto</p>
                            <span>
                                El proyecto busca simplificar la experiencia de maquillaje para usuarios de todos los niveles. Ofrece la exploración de estilos y la posibilidad de probar maquillaje virtualmente, además de proporcionar tutoriales interactivos para aprender técnicas. La aplicación tiene como meta inspirar a un amplio rango de usuarios, desde principiantes hasta aquellos con experiencia, abarcando una edad aproximada de 16 a 80 años.
                            </span>
                            <p>investigación y analisis</p>
                            <span>Para el desarrollo de la aplicación de maquillaje, se llevó a cabo una investigación del mercado y los usuarios. Esto incluyó el análisis detallado de aplicaciones similares para comprender las necesidades y expectativas del público.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
        <div className='fatCardGallery'>      
            <Card
                showImage={true}
                imageUrl={process3}
                showDescription={true}
                description={<div>
                <h3><strong>Paleta de colores</strong></h3>
                <span>Al elegir la tipografía y la paleta de colores para la aplicación, opté por elementos que reflejaran las tendencias actuales de diseño, atrajeran visualmente a nuestro público juvenil y transmitieran una pizca de elegancia a través de tonos frios.</span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={1}
            />
            <Card
                showImage={true}
                imageUrl={process4}
                showDescription={true}
                description={<div>
                <h3>Tipografía </h3>
                <span>Prioricé la legibilidad en dispositivos móviles y la cohesión con la temática de la app, creando un ambiente sofisticado y diferenciándonos de la competencia. La elección se basó en la adaptabilidad a diferentes contenidos y en la búsqueda de una identidad visual distintiva que resonara con nuestra audiencia.</span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={2}
            />       
        </div>
        <Separator2/>
        <div className='skills-content'>
                <div className='skills-pics'>
                    <Pic
                    urlPic={process5}
                    stars={1}
                    thin={true}
                    />
                    <Pic
                    urlPic={process6}
                    stars={2}
                    thin={true}
                    />
                </div>
                <div className='skills-info'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>ícono madre</p>
                            <span>
                                Diseñé un icono madre y su sistema para la app, comenzando con la creación de un icono principal que capturara la esencia y propósito de la aplicación. Este icono madre sirvió como la base conceptual y estilística.
                            </span>
                            <p>Sistema de íconos</p>
                            <span>Luego, desarrollé un sistema de iconos coherente, asegurándome de mantener elementos visuales y estéticos similares para garantizar consistencia y reconocimiento en toda la aplicación. Cada icono secundario se adaptó a su funcionalidad específica, pero compartió rasgos visuales comunes para lograr una identidad visual unificada y fácilmente identificable.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
        <div className='fatCardGallery'>      
            <Card
                showImage={true}
                imageUrl={process7}
                showDescription={true}
                description={<div>
                <h3><strong>Wireframes en baja</strong></h3>
                <span>Para pasar de los wireframes en baja a los wireframes en alta, primero delineé las estructuras y disposiciones básicas en los wireframes iniciales, estableciendo la funcionalidad general de la interfaz. </span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={1}
            />
            <Card
                showImage={true}
                imageUrl={process8}
                showDescription={true}
                description={<div>
                <h3>Wireframes en alta</h3>
                <span>Luego, refiné estos esquemas, incorporando detalles más precisos y específicos, como elementos de diseño, tamaños de texto, y ubicación exacta de los botones. Este proceso elevó la fidelidad visual y funcional de los wireframes, proporcionando una representación más detallada y cercana al aspecto final de la interfaz de la aplicación.</span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={2}
            />       
        </div>
        <Separator title='Conclusión' pilltext='Ir a prototipo funcional' inicioPill={false}/>
        <div className='conclusionContainer'>
            <div className='conclusionText'>
                    <p> En este proyecto de diseño gráfico, aprendí a desarrollar una identidad visual coherente para una aplicación.<br/><br/>                    
                        Comencé definiendo conceptos clave, como la marca y la estructura de la interfaz, utilizando wireframes en baja para establecer la funcionalidad básica. 
                        Luego, elevé la fidelidad de los wireframes al pasar a la etapa de alta, refinando detalles específicos como elementos de diseño y ubicación precisa de botones. <br/><br/>  
                        La selección cuidadosa de tipografías, paletas de colores, y la creación de un sistema de iconos contribuyeron a la cohesión visual. Además, incorporé la importancia de la adaptabilidad a las necesidades del público objetivo y la consistencia en la representación gráfica.<br/><br/>  
                        <strong>Este proyecto me permitió mejorar mis habilidades en la creación de interfaces visualmente atractivas y funcionales. </strong>
                    </p>
            </div>
            <div className='conclusionImg'>
                <span></span>
                <img src={process9}/>
            </div>
        </div>
        <Separator2/>
    </>
  )
}

export default Glam