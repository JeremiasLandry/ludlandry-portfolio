import React from 'react'
import Star from '../Cards/star.png';

const Pic = ({urlPic, stars, thin}) => {
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

  return (
    <div className={thin ? 'thinPicContainer' : 'FatPicContainer'}>
         {stars === 2 ? (<div className='stargroup'><img className={starIcon} src={Star}/><img className={starIcon} src={Star}/></div>)
            : stars === 1 ? (<div className='stargroup onestar'><img className={starIcon} src={Star}/></div>)
            : null}
        <img className={thin ? 'myThinPic' : 'myFatPic'} src={urlPic} alt="Card" />
    </div>
  )
}

export default Pic