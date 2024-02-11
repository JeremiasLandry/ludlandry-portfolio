import React, {useState, useEffect} from 'react'
import Card from '../Cards/Card'
import urlPic from './presentation.jpg'
import writingPic from './writing.jpg'

const Home = () => {
    const [pantalla, setPantalla] = useState('');

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia('(max-width: 700px)'),
      window.matchMedia('(max-width: 800px)'),
      window.matchMedia('(max-width: 1050px)'),
      window.matchMedia('(max-width: 1279px)'),
      window.matchMedia('(min-width: 1280px)'),
    ];

    const manejarCambioEnPantalla = () => {
      const tamanios = ['xs', 'sm', 'md', 'lg', 'xl'];
      const indice = mediaQueries.findIndex(query => query.matches);
      setPantalla(tamanios[indice]);
    };

    mediaQueries.forEach(mediaQuery => {

      mediaQuery.addListener(manejarCambioEnPantalla);
    });

    // Llama a la función para manejar el estado inicial
    manejarCambioEnPantalla();

    // Limpia los event listeners al desmontar el componente
    return () => {
      mediaQueries.forEach(mediaQuery => {
        mediaQuery.removeListener(manejarCambioEnPantalla);
      });
    };
  }, []);

  const navClasses = {
    xs: 'nav-xs',
    sm: 'nav-sm',
    md: 'nav-md',
    lg: 'nav-lg',
    xl: '',
  };



  return (<>
    {pantalla === "xs" ? 
    (<div id='Home' className={navClasses[pantalla]}>
        <div className='presentationBanner'>
            <div className='presentationTitles'>
                <p>Portfolio</p>
                <h2><strong>Website</strong></h2>
                
            </div>
            <span>2024</span>
            <div className='presentationDescription'>
                <h3>Introduccion</h3>
                <p>Este portafolio muestra mi habilidad para comprender a fondo a los usuarios, traducir percepciones en soluciones creativas y colaborar eficazmente. </p>
                <p>Cada proyecto cuenta mi historia de superar desafíos y evolucionar mis habilidades.</p>
            </div>
        </div>
        <img src={writingPic} className='writingPicMobile'/>
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
    </div>) 
    
    :(<div id='Home' className={navClasses[pantalla]}>
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
    </div>)}
   
  </>);
};

export default Home