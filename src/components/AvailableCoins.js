import React from 'react';
import { connect } from 'react-redux';

const AvailableCoins = (props) => {
  const { coins } = props;
  const coinsStr = coins && Array.isArray(coins) ? coins.join(', ') : ''
  return <div className='available-coins'>
    <i>Available coins: {coinsStr}</i>
  </div>
};

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
  };
};

export default connect(mapStateToProps)(AvailableCoins);