import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  return <div className='product'>
    <h4>{props.name}</h4>
    <p>Price: ${props.price}</p>
    <p>Number: <b>{props.productNumber}</b></p>
  </div>;
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  productNumber: PropTypes.number,
};

export default Product;