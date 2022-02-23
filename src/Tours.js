import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return (
    <section>

      <div className='title'>
      <h1>Our tours</h1>
      <div className='underline'/>
      </div>

      <div>
        {tours.map((tour)=>{
          /*return <Tour key={tour.id} {...tour}>*/
          return <Tour key={tour.id} tour={tour} >


          </Tour>
        })}
      </div>
      

    </section>
  );
};

export default Tours;
