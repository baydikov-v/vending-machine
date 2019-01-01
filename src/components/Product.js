import React from 'react';

const Product = (props) => {
  return <div className='product'>
    <h4>{props.title}</h4>
    <p>Price: ${props.price}</p>
    <p>Number: <b>{props.productNumber}</b></p>
  </div>;
};

export default Product;