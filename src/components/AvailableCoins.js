import React from 'react';
import PropTypes from 'prop-types';
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

AvailableCoins.propTypes = {
  coins: PropTypes.array
};

export default connect(mapStateToProps)(AvailableCoins);