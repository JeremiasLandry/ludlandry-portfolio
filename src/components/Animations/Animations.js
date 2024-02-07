import React from 'react'
import Card from '../Cards/Card';
import star from '../AboutMe/star.png'
import leftpic from './animations1.jpg'
import rightpic from './animations2.jpg'
import illustrator1 from './illustrator1.jpg'
import illustrator2 from './illustrator2.jpg'
import illustrator3 from './illustrator3.jpg'
import illustrator4 from './illustrator4.jpg'
import Separator2 from '../Separator/Separator2';
import photoshop1 from './photoshop1.jpg'
import photoshop2 from './fondo.jpg'
import photoshop3 from './sujeto.jpg'
import photoshop4 from './resultadointegracion.jpg'

const AnimatedProjects = () => {
  return (
    <>
        <div id='Animations'>
            <div className='fatCardGallery'>
                <div className='proyecto01-card'>
                    <img src={leftpic} className='proyecto01-img'/>
                    <div className='proyecto01-description'>
                        <span>Proyecto 05</span>
                        <div>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction'>
                    <p>Animaciones</p>
                    <Card
                        showImage={true}
                        imageUrl={rightpic}
                        showDescription={true}
                        description={<div>
                           <span>Creé diversas ilustraciones utilizando <strong>Adobe Illustrator</strong> y <strong>Photoshop</strong>. Con Illustrator, me dediqué a producir trabajos de ilustración vectorial tanto en 2D como en 3D. Por otro lado, con Photoshop, incorporé arte digital y me enfoqué en la fotomanipulación.<br/><br/>
                                Estas dos herramientas fueron ampliamente utilizadas en los proyectos presentados previamente en este portfolio.</span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>
            <Separator2/>
            <div className='fatCardGallery'>
                <div className='proyecto01-card animations'>
                    <img src={illustrator1} className='proyecto01-img'/>
                    <div className='proyecto01-description animations'>
                        <div>
                            <span>Ilustración vectorial de Toy Story 4.</span>
                            <span>Inspiración: <a href='http://www.strongstuff.net' target='_blank'>http://www.strongstuff.net</a></span>
                            <strong><a href='#'>Ver en Adobe Illustrator</a></strong>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction animations'>
                    <p>Illustrator</p>
                    <Card
                        showImage={true}
                        imageUrl={illustrator2}
                        showDescription={true}
                        description={<div>
                           <span>Ilustración 3D inspirada en artista anónimo.<br/><br/>
                           <strong><a href='#'>Ver en Adobe Illustrator</a></strong></span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>
            <Separator2/>
            <div className='conclusionContainer'>
                <div className='conclusionText'>
                        <p>Penguins of Madagascar - Movie Scene <br/><br/>
                        Inspiración: escena de la película “Pingüinos de Madagascar¨. <br/><br/>
                        <strong><a href='#'>Ver en Adobe Illustrator</a></strong>
                        </p>
                </div>
                <div className='conclusionImg'>
                    <span></span>
                    <img src={illustrator3}/>
                </div>
            </div>
            <Separator2/>
            <div className='fatCardGallery animations'>
                <div className='proyecto01-card animations'>
                    <img src={illustrator4} className='proyecto01-img'/>
                    <div className='proyecto01-description animations'>
                        <div>
                            <span>Ilustración artística de ¨Mandalorian¨.</span>
                            <strong><a href='#'>Ver en Adobe Photoshop</a></strong>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction animations'>
                    <p>Photoshop</p>
                    <Card
                        showImage={true}
                        imageUrl={photoshop1}
                        showDescription={true}
                        description={<div>
                           <span>Ilustración artística de serie de Netflix ¨Peaky Blinders¨.<br/><br/>
                           <strong><a href='#'>Ver en Adobe Illustrator</a></strong></span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>
            <Separator2/>
            <div className='skills-content cardinfo uxwriting'>
            <Card
                showImage={true}
                imageUrl={photoshop2}
                showDescription={true}
                description={<>
                    <h3>Fondo</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={photoshop3}
                showDescription={true}
                description={<>
                    <h3>Elemento - Sujeto</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={photoshop4}
                showDescription={true}
                description={<>
                    <h3>Resultado de integración</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
        </div>
        </div>
    </>
  )
}

export default AnimatedProjects