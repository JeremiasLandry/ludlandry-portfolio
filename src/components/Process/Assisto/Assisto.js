import React from 'react'
import leftpic from './asistologo.jpg'
import rightpic from './asistomobile.jpg'
import star from '../../AboutMe/star.png'
import Separator from '../../Separator/Separator'
import Card from '../../Cards/Card'
import process1 from './asistoprocess.jpg'
import process2 from './asistobenchmarking.jpg'
import Separator2 from '../../Separator/Separator2'
import process3 from './asistodescubrir1.jpg'
import process4 from './asistodescubrir2.jpg'
import Pic from '../../Pic/Pic'
import assistodefinir from './asistodefinir.jpg'
import assistodefinir2 from './asistodefinir2.jpg'
import assistodefinir3 from './asistodefinir3.jpg'
import assistoux1 from './asistoux1.jpg'
import assistoux2 from './asistoux2.jpg'
import assistoux3 from './asistoux3.jpg'
import assistodesign from './asistodesign.jpg'
import assistodesign2 from './asistodesign2.jpg'
import assistodesign3 from './asistodesign3.jpg'
import assistodesign4 from './asistodesign4.jpg'
import assistodesign5 from './asistodesign5.jpg'
import assistoConclusion from './asistoconclusion.jpg'


const Assisto = () => {
  return (
    <>
        <div id='Process'>
            
            <div className='fatCardGallery'>
                <div className='proyecto01-card'>
                    <img src={leftpic} className='proyecto01-img'/>
                    <div className='proyecto01-description'>
                        <span>Proyecto 03</span>
                        <div>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                            <img src={star} className='littlestar'/>
                        </div>
                    </div>
                </div>

                <div className='proyecto01-introduction'>
                    <p>Assisto app</p>
                    <Card
                        showImage={true}
                        imageUrl={rightpic}
                        showDescription={true}
                        description={<div>
                           <span>En la materia de diseño UX trabajamos en grupo para crear Assisto App, una aplicación para simplificar la gestión de la salud.
                                Esta aplicación actúa como un asistente virtual accesible, permitiendo la programación intuitiva de eventos y actividades mediante texto o voz. Con recordatorios efectivos y una interfaz fácil de usar, aspiramos a mejorar la calidad de vida del usuario, ofreciendo una herramienta amigable para el cuidado de la salud personal.</span>
                            </div>}
                        showButton={false}
                        imageOnTop={true}
                        cardFat={true}
                        stars={0}
                    />
                </div>
            </div>
            <Separator title='Proceso' pilltext='prototipo funcional' inicioPill={false}/>
            <p className='articleSubtitle'>1. Descubrir</p>
            
        </div>
        <div className='fatCardGallery'>      
            <Card
                showImage={true}
                imageUrl={process1}
                showDescription={true}
                description={<div>
                <h3><strong>Design Thinking</strong></h3>
                <span>Primero tuvimos que planificar y dividir el proceso en 4 etapas alineadas a la metodología Design Thinking y Doble Diamante.</span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={process2}
                showDescription={true}
                description={<div>
                <h3>Benchmarking</h3>
                <span>Realizamos un benchmarking de aplicaciones médicas para identificar sus fortalezas, debilidades y áreas de mejora, enfocándonos en optimizar la experiencia del usuario. </span>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={0}
            />       
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
                        <div className='skills-card-top cleobot'>
                            <p>Entrevistas y análisis</p>
                            <span>
                            Complementamos este análisis con entrevistas a usuarios, obteniendo una comprensión profunda de sus desafíos en la gestión de la salud, lo que nos permitió detectar áreas clave de mejora y definir funcionalidades que marcarán la diferencia en la experiencia de la aplicación, asegurando así una solución más efectiva y centrada en las necesidades reales de los usuarios.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <Separator2/>
        <p className='articleSubtitle'>2. Definir</p>
        <div className='skills-content cardinfo'>
            <Card
                showImage={true}
                imageUrl={assistodefinir}
                showDescription={true}
                description={<>
                    <h3>User personas</h3>
                    <span>Generamos User Personas entendiendo sus motivaciones para diseñar una experiencia centrada en sus necesidades específicas, los analizamos e  identificamos las funcionalidades esenciales, priorizando aquellas que mejoran su experiencia. </span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistodefinir2}
                showDescription={true}
                description={<>
                    <h3>Point of View (POV)</h3>
                    <span>Una vez conocido el usuario al que iba dirigido el proyecto, había que saber qué funciones tenía que tener el producto. Para ello, creamos historias específicas de distintos usuarios.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistodefinir3}
                showDescription={true}
                description={<>
                    <h3>Funcionalidades</h3>
                    <span>Definimos funcionalidades principales y secundarias con el objetivo de superar las expectativas de los usuarios y anticiparnos a sus necesidades, agregando así una propuesta de valor única a nuestro producto.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
        </div>
        <Separator2/>
        <p className='articleSubtitle'>2. Definir - <strong>UX WRITING</strong></p>
        <div className='skills-content cardinfo uxwriting'>
            <Card
                showImage={true}
                imageUrl={assistoux1}
                showDescription={true}
                description={<>
                    <h3>Formal, respetuoso</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistoux2}
                showDescription={true}
                description={<>
                    <h3>Serio</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistoux3}
                showDescription={true}
                description={<>
                    <h3>Directo al grano</h3>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
        </div>
        <Separator2/>
        <p className='articleSubtitle'>2. Diseñar</p>
        <div className='skills-content cardinfo'>
            <Card
                showImage={true}
                imageUrl={assistodesign}
                showDescription={true}
                description={<>
                    <h3>Sketching+Wireframes en baja</h3>
                    <span>Empleamos un enfoque colaborativo y creativo con un Crazy 8 para explorar diversas formas de presentar la información en pantalla, luego desarrollamos wireframes en baja fidelidad. Compartimos ideas y votamos las diferentes soluciones, asegurando que el diseño final reflejara una síntesis efectiva.
                    </span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistodesign2}
                showDescription={true}
                description={<>
                    <h3>Material Design</h3>
                    <span>Utilizamos un esquema de color basado en Material Design con tonos frios como el azul para transmitir seriedad y confianza. Destacamos CTAs con un color de acento de contraste accesible. Elegimos la fuente Montserrat por su visibilidad y versatilidad digital, junto con una librería de íconos consistente.</span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
            <Card
                showImage={true}
                imageUrl={assistodesign3}
                showDescription={true}
                description={<>
                    <h3>UI Kit</h3>
                    <span>Después de definir el sistema de iconos, procedimos a la creación del UI Kit., manteniéndonos fiel a los principios de Material Design.  Para la creación del UI Kit, implementamos la librería de íconos adaptable y consistente que desarrollamos anteriormente, garantizando coherencia visual en toda la interfaz de usuario
                    </span>
                    </>}
                showButton={false}
                imageOnTop={true}
                cardFat={false}
                stars={0}
            />
        </div>
        <Separator2/>
        <div className='fatCardGallery uxwriting'>      
            <Card
                showImage={true}
                imageUrl={assistodesign4}
                showDescription={true}
                description={<div>
                <h3><strong>Heurísticas</strong></h3>
                </div>}
                showButton={false}
                imageOnTop={true}
                cardFat={true}
                stars={1}
            />
            <Card
                showImage={true}
                imageUrl={assistodesign5}
                showDescription={true}
                description={<div>
                <h3>Patrones de diseño</h3>
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
                    <p>Para concluír, en el desarrollo de Assisto nos sumergimos en la realidad de los usuarios para entender sus necesidades en la gestión de la salud. Las entrevistas y la revisión de otras aplicaciones médicas mostraron problemas comunes y resaltaron la importancia de abordar estas necesidades de forma efectiva y accesible para todas las personas.<br/><br/>
                    En este proyecto, aprender a ser flexible fue esencial. Tuvimos que hacer muchos ajustes en el producto para que se ajustara mejor a las necesidades de las personas y a los problemas que íbamos encontrando. 
                    En el mundo de UX, además de ser <strong>flexible</strong>, también entendemos que es importante ser <strong>empático</strong>, tener un <strong>pensamiento crítico</strong>, <strong>observar</strong> detalladamente y <strong>diseñar</strong> pensando en el usuario para crear un producto que genere un impacto positivo en la vida de las personas.
                    </p>
            </div>
            <div className='conclusionImg'>
                <span></span>
                <img src={assistoConclusion}/>
            </div>
        </div>
        <Separator2/>
    </>
  )
}

export default Assisto