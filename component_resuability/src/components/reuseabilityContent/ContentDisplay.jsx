import React from 'react'
import './ContentDisplay.css';
export const ContentDisplay = ({ img, price, Bname }) => {
  return ( <>
        
    
      <div className='eachContainer'>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="bikeName">{Bname}</div>
        <div className="bikePrice">Price: {price}</div>
      </div>
  </>);
};
