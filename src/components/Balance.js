import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AvailableCoins from './AvailableCoins';
import { addMoney } from '../actions/balance';
import { buy } from '../actions/transactions';
import Error from "./elements/Error";
import Button from "./elements/Button";

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }

  render () {
    const { amount, error, totalCost } = this.props;
    return <div className='order'>
      <h3 className='t-center'>Balance</h3>
      <AvailableCoins/>
      <div className='form-group'>
        <label>Amount of coin</label>
        <input
          type='text'
          name='productNumber'
          onChange={e => this.setState({amount: e.target.value})}
        />
        <Button
          className='btn-default add-coin'
          onClick={() => this.props.addMoney(this.state.amount)}
          title='Drop Coin'
        />
        {error ? <Error>{error}</Error> : ''}
      </div>
      <h4 className='total-cost'>Total money: { `$${amount.toFixed(2)}` }</h4>
      <Button
        className='btn-primary'
        disabled={error || !totalCost}
        onClick={() => this.props.buy()}
        title='BUY'
      />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    amount: state.balance.amount,
    error: state.balance.error,
    totalCost: state.order.totalCost,
  };
};

Balance.propTypes = {
  amount: PropTypes.number,
  error: PropTypes.string,
  totalCost: PropTypes.number,
  addMoney: PropTypes.func,
  buy: PropTypes.func,
};

export default connect(mapStateToProps, {
  addMoney,
  buy,
})(Balance);