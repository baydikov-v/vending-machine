import React from 'react';
import { connect } from 'react-redux';

const Order = (props) => {
  const { productNumber, numberProducts, totalCost } = props;
  return <div className='order'>
    <h3 className='t-center'>Order</h3>
    <div className='form-group'>
      <label>Product Number</label>
      <input
        type='text'
        name='productNumber'
        value={productNumber}
      />
    </div>
    <div className='form-group'>
      <label>Number of products</label>
      <input
        type='text'
        name='amount'
        value={numberProducts}
      />
    </div>
    <h4 className='total-cost'>Total cost: { totalCost ? totalCost : '--' }</h4>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    productNumber: state.order.productNumber,
    numberProducts: state.order.numberProducts,
    totalCost: state.order.totalCost,
  };
};

export default connect(mapStateToProps)(Order);