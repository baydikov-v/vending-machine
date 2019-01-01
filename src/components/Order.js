import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setProductNumber, setAmount } from '../actions/order';
import Error from './elements/Error';

const Order = (props) => {
  const { productNumber, amount, totalCost, errors } = props;
  return <div className='order'>
    <h3 className='t-center'>Order</h3>
    <div className='form-group'>
      <label>Product Number</label>
      <input
        type='text'
        name='productNumber'
        value={productNumber}
        onChange={e => props.setProductNumber(e.target.value)}
      />
      {errors.productNumber ? <Error>{errors.productNumber}</Error> : ''}
    </div>
    <div className='form-group'>
      <label>Number of products</label>
      <input
        type='text'
        name='amount'
        value={amount}
        onChange={e => props.setAmount(e.target.value)}
      />
    </div>
    <h4 className='total-cost'>Total cost: { totalCost ? `$${totalCost}` : '--' }</h4>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    productNumber: state.order.productNumber,
    amount: state.order.amount,
    totalCost: state.order.totalCost,
    errors: state.order.errors,
  };
};

Order.propTypes = {
  productNumber: PropTypes.string,
  amount: PropTypes.string,
  totalCost: PropTypes.number,
  errors: PropTypes.object,
  setProductNumber: PropTypes.func,
  setAmount: PropTypes.func,
};

export default connect(mapStateToProps, {
  setProductNumber,
  setAmount,
})(Order);