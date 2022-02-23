import React, { useState,useContext } from 'react';
import {TourAPI} from './App'

const Tour = ({tour}) => {

  const {id,name,info,image,price}=tour
  
  const[readMore,setReadMore]= useState(false);
  const {removeTour}= useContext(TourAPI)

  return (

    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info: `${info.substring(0,200)}...`}

        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
        
        </p>

        <button className='delete-btn' onClick={()=>

          removeTour(id)
        }>Not interested</button>
      </footer>
    </article>

  )
};

export default Tour;
