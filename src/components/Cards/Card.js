import React from 'react';
import Star from './star.png'
import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

const Card = ({ showImage, showDescription, showButton, imageUrl, description, imageOnTop, cardFat, stars, boxOnly}) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: imageOnTop ? 'column' : 'column-reverse',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        width: cardFat ? '830px': '490px',
        maxWidth: cardFat ? '830px': '300px',
        height: cardFat ? 'auto': '467px',
        border: '3px solid #000',
        backgroundColor: showDescription ? '#E4DDCF':'#fff',
        borderRadius: '20px'
      };

      const starIcon = {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '100',
        maxWidth: '10px',
        maxHeight: '10px',
        height:'10px',
        width:'10px'
      };
    
    
    const cardWeight = cardFat ? 'cardFatImg' : 'cardThinImg';
    const cardPosition = imageOnTop ? 'imgTop' : 'imgBottom';

    return (
        <div className={`card ${cardFat ? 'fatCard' : ''} ${boxOnly ? 'boxOnly' : null}`} style={containerStyle}>
            {showImage && (
            <div className='imgContainer'>
                {stars === 2 ? (<div className='stargroup'><img className={starIcon} src={Star}/><img className={starIcon} src={Star}/></div>)
                : stars === 1 ? (<div className='stargroup onestar'><img className={starIcon} src={Star}/></div>)
                : null}
                <img className={`${cardWeight} ${cardPosition}`} src={imageUrl} alt="Card" />
            </div>)}
            {showButton ? ( 
            <div className={`descriptionBox ${cardFat ? 'fatBox' : ''}`}>
                <div>{description}</div>
                <ArrowButton/>
            </div>
            ) : (
            <div className={`descriptionBox noButtonDescription`}>
                <div>{description}</div>
            </div> 
            )}
        </div>
  )
}

export default Card