import React from 'react'
import leftpic from './proyecto02.jpg';
import star from '../../AboutMe/star.png'
import rightpic from './jade.jpg';
import Card from '../../Cards/Card';
import Separator2 from '../../Separator/Separator2';
import Separator from '../../Separator/Separator';
import process1 from './jadeprocess.jpg'
import Pic from '../../Pic/Pic';
import process2 from './jadeprocess2.jpg'
import process3 from './jadeprocess3.jpg'
import process4 from './jadepalette.jpg'
import process5 from './jadebottle.jpg'
import process6 from './jadebag.jpg'
import process7 from './jadefinal.jpg'
import process8 from './jadecream.jpg'



const Jade = () => {
  return (
    <>
        <div id='Process'>
            <Separator2/>
            <div className='fatCardGallery'>
                <div className='proyecto01-card'>
                    <img src={leftpic} className='proyecto01-img'/>
                    <div className='proyecto01-description'>
                        <span>Proyecto 02</span>
                        <div>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction'>
                    <p>Jade, website</p>
                    <Card
                        showImage={true}
                        imageUrl={rightpic}
                        showDescription={true}
                        description={<div>
                           <span>El proyecto buscó promover la conciencia vegana al fomentar la adopción de cosméticos veganos y cruelty-free, ofreciendo variedad y calidad que cumplieran con estándares éticos. La audiencia incluyó no solo veganos, sino también personas comprometidas con el bienestar animal y la sustentabilidad, así como consumidores conscientes, amantes de la cosmética, y usuarios con piel sensible.</span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>


        </div>
        <Separator title='Proceso' pilltext='Ir al sitio web' inicioPill={false}/>
        <div className='skills-content'>
                <div className='skills-pics jade'>
                    <Pic
                    urlPic={process1}
                    stars={2}
                    thin={true}
                    />
                    <div className='twopic-container'>
                        <img className='twopic-one' src={process2}/>
                        <img className='twopic-two' src={process3}/>
                    </div>
                </div>
                <div className='skills-info jade'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>Investigación y analisis</p>
                            <span>
                                Investigué el mercado y a los usuarios a través de entrevistas, estudios de competencia, análisis de tendecias del mercado y pruebas de usabilidad.
                            </span>
                            <p>Diseño visual</p>
                            <span>Luego de definir el concepto de marca, establecer la estructura de la página web y la disposición de los elementos en la pantalla a través de los wireframes, comencé a diseñar la visual. Inspirándome en el <strong>moodboard</strong>, inicié el proceso con la creación del isologotipo, simplificando la representación de un colibrí en un plano vectorizado. 
                                Posteriormente, digitalicé la imagen y le incorporé el nombre de la marca. Finalmente, presenté el isologotipo en versiones a color y en blanco y negro
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
        <div className='skills-content'>
                <div className='skills-pics jade'>
                    <Pic
                    urlPic={process4}
                    stars={2}
                    thin={false}
                    />
                    <Pic
                    urlPic={process5}
                    stars={1}
                    thin={true}
                    />
                </div>
                <div className='skills-info jade'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>Tipografía y paleta de colores</p>
                            <span>
                                Elegí una tipografía legible y apropiada para la web, al mismo tiempo que seleccioné una paleta de colores que no solo representara la identidad de la marca, sino que también resultara visualmente agradable. 
                                Además, di prioridad a la elección de imágenes y gráficos de alta calidad, asegurándome de que fueran relevantes para el contenido del sitio.<br/><br/>
                                En cuanto a la experiencia del usuario, diseñé una navegación intuitiva y aseguré que los elementos estuvieran bien organizados. El objetivo principal era facilitar la interacción del usuario, permitiendo una experiencia de usuario fluida y sin complicaciones.
                            </span>
                            
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
        <div className='skills-content'>
                <div className='skills-pics jade'>
                    <Pic
                    urlPic={process6}
                    stars={2}
                    thin={true}
                    />
                    <div className='twopic-container'>
                        <img className='twopic-one' src={process7}/>
                        <img className='twopic-two' src={process8}/>
                    </div>
                </div>
                <div className='skills-info jade'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>Conclusiones finales</p>
                            <span>
                                Finalmente, me aseguré de que el diseño fuera completamente adaptable a diferentes dispositivos y tamaños de pantalla. La versatilidad en la presentación del sitio garantiza que los usuarios tengan una experiencia consistente y agradable, independientemente del dispositivo que utilicen.<br/><br/>
                                En resumen, este proyecto integró cuidadosamente aspectos de diseño gráfico y programación web para crear un sitio web de ventas de productos para la piel que cumple con estándares de calidad y usabilidad.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
    </>
  )
}

export default Jade