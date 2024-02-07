import React from 'react'
import star from '../../AboutMe/star.png';
import Separator from '../../Separator/Separator';
import leftpic from '../lipstick.jpg'
import Card from '../../Cards/Card';
import rightpic from '../cleoapp.jpg'
import Separator2 from '../../Separator/Separator2';
import process1 from '../process.jpg'
import process2 from '../process2.jpg'
import process3 from '../process3.jpg'
import process4 from '../process4.jpg'
import process5 from '../process5.jpg'
import process6 from '../process6.jpg'
import process7 from '../process7.jpg'
import process8 from '../process8.jpg'
import cleobot from '../cleobot.jpg';
import Pic from '../../Pic/Pic';

const Cleo = () => {
  return (
    <>
        <div id='Process'>
            <Separator title='Proceso' pilltext='prototipo funcional' inicioPill={false}/>
            <div className='fatCardGallery'>
                <div className='proyecto01-card'>
                    <img src={leftpic} className='proyecto01-img'/>
                    <div className='proyecto01-description'>
                        <span>Proyecto 01</span>
                        <div>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction'>
                    <p>Cleo, app</p>
                    <Card
                        showImage={true}
                        imageUrl={rightpic}
                        showDescription={true}
                        description={<div>
                           <span>La aplicación móvil "Cleo" fue desarrollada como parte de un proyecto final en el curso de Diseño UX/UI de Coderhouse.
                            Este proyecto tiene como objetivo principal promover el cuidado adecuado de la piel, proporcionando a los usuarios un acceso fácil a información sobre productos Cruelty Free y Veganos. Además, la aplicación permite a los usuarios comprar estos productos y compartir sus opiniones mediante la función de calificación.
                            Se basó principalmente en el diseño de interfaz (UI).</span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>

            <Separator2/>
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
                        <div className='skills-card-top'>
                            <p>MVP y Arquetipos</p>
                            <span>Con el MVP (Producto Mínimo Viable) definí las funcionalidades principales, luego de la ideación en papel. 
                                Por otro lado, los arquetipos ayudaron a comprender las necesidades y comportamientos de los usuarios, orientando el diseño hacia soluciones específicas. 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Separator2/>
            <div className='skills-content'>
                <div className='skills-pics'>
                    <Pic
                    urlPic={process3}
                    stars={1}
                    thin={true}
                    />
                    <Pic
                    urlPic={process4}
                    stars={2}
                    thin={true}
                    />
                </div>
                <div className='skills-info'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top'>
                            <p>Userflow y Cardsorting</p>
                            <span>El Userflow fue centrado en dos tareas fundamentales: educar sobre el cuidado de la piel y facilitar la compra de productos veganos y Cruelty Free. 
                                    Para garantizar una experiencia intuitiva, utilicé la técnica de Card Sorting cerrado. Este proceso me proporcionó valiosa información sobre los modelos mentales y las expectativas de los usuarios al explorar el contenido. 
                                    Con estos insights, construí una arquitectura de la información sólida, asegurando que la navegación refleje de manera efectiva las necesidades y preferencias de los usuarios.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Separator2/>
        <div className='skills-content cardinfo'>
            <Card
                showImage={true}
                imageUrl={process5}
                showDescription={true}
                description={<>
                    <h3>Arquitectura de información</h3>
                    <span>La arquitectura de la información (AI) desempeñó un papel clave en el diseño al organizar la estructura y el flujo de información para mejorar la usabilidad. Defininió la jerarquía visual, facilitando la navegación y contribuyendo a una experiencia de usuario coherente.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={process6}
                showDescription={true}
                description={<>
                    <h3>Evolución de wireframes</h3>
                    <span>La AI me sirvió como base para llegar a los wireframes en baja fidelidad, ya que muestran la disposición de elementos antes de trabajar en los detalles visuales. Estos wireframes son fundamentales para iterar y revisar eficientemente antes de avanzar a etapas más detalladas del diseño.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={process7}
                showDescription={true}
                description={<>
                    <h3>Design System</h3>
                    <span>Después de varias rondas de pruebas y ajustes, consolidé los patrones de diseño, componentes reutilizables y las reglas para cómo interactuar en el Design System. Este sistema no solo garantiza coherencia en toda la aplicación, sino que también acelera el proceso de desarrollo.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
        </div>
        <Separator2/>
        <div className='skills-content'>
                <div className='skills-pics'>
                    <Pic
                    urlPic={cleobot}
                    stars={0}
                    thin={true}
                    />
                    <Pic
                    urlPic={process8}
                    stars={0}
                    thin={true}
                    />
                </div>
                <div className='skills-info'>

                    <div className='skills-card'>
                        <span className='skills-card-bottom'></span>
                        <div className='skills-card-top cleobot'>
                            <p>Prototipos en alta y pruebas de usabilidad</p>
                            <span>
                                Las pruebas de usabilidad fueron esenciales para garantizar que el diseño sea efectivo y satisfactorio para los usuarios. Al realizar pruebas de usabilidad antes de diseñar los wireframes en alta fidelidad, idetifiqué y corregí posibles problemas de experiencia del usuario desde las primeras etapas. Esto aseguró que los wireframes posteriores estén basados en una comprensión sólida de las necesidades y preferencias del usuario.
                                Al integrar la retroalimentación de las pruebas de usabilidad en el proceso de diseño, se optimiza la eficacia y la usabilidad del producto final, lo que contribuye a un proyecto concluido que realmente cumple con las expectativas y necesidades de los usuarios.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Cleo