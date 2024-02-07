import React from 'react'
import Separator from '../Separator/Separator'
import skills1 from './skills1.jpg'
import Pic from '../Pic/Pic'
import skills2 from './skills2.jpg'
import figma from './figmaicon.jpg';
import afterEffects from './aftereffectsicon.jpg';
import premiere from './premiericon.jpg';
import css3icon from './css3.jpg';
import html5icon from './htmlicon.jpg'
import photoshopicon from './photoshopicon.jpg';
import cinema4dicon from './cinema4dicon.jpg'
import illustratoricon from './illustratoricon.jpg';
import spainflag from './Bandera_de_España.jpg'
import engflag from './ukflag.png';
import gerflag from './Flag-Germany.jpg'


const Skills = () => {
  return (
    <div id='Skills'>

      <Separator title='Habilidades' pilltext='reallygreatsite.com' inicioPill={false}/>

      <div className='skills-content'>

        <div className='skills-pics'>
            <Pic
            urlPic={skills1}
            stars={1}
            thin={true}
            />
            <Pic
            urlPic={skills2}
            stars={2}
            thin={true}
            />
        </div>

        <div className='skills-info'>

          <div className='skills-card'>
            <span className='skills-card-bottom'></span>
            <div className='skills-card-top'>
              <p className='softwareskillsp'>Softwares</p>
              <div className='skills-rows'>

                <div className='skills-first-row'>
                  <img src={figma} className='skill-icon'/><span className='skill-name'>Figma</span>
                  <img src={afterEffects} className='skill-icon'/><span className='skill-name'>After Effects</span>
                  <img src={premiere} className='skill-icon'/><span className='skill-name'>Adobe Premiere</span>
                </div>

                <div className='skills-second-row'>
                  <img src={css3icon} className='skill-icon'/><span className='skill-name'>CSS3</span>
                  <img src={html5icon} className='skill-icon'/><span className='skill-name'>HTML5</span>
                  <img src={photoshopicon} className='skill-icon'/><span className='skill-name'>Adobe Photoshop</span>
                </div>

                <div className='skills-third-row'>
                  <img src={cinema4dicon} className='skill-icon'/><span className='skill-name'>Cinema <br/>4D</span>
                  <img src={illustratoricon} className='skill-icon'/><span className='skill-name'>Adobe Illustrator</span>
                </div>

              </div>

              <p className='softwareskillsp'>Idiomas</p>

              <div className='languages'>
                <div className='languages-first-row'>
                  <img src={spainflag} className='languages-icon'/><span className='skill-name'>Español - Nativo</span>
                  <img src={engflag} className='languages-icon'/><span className='skill-name'>Inglés</span>
                </div>
                <div className='languages-second-row'>
                  <img src={gerflag} className='languages-icon'/><span className='skill-name'>Alemán - Intermedio</span>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills