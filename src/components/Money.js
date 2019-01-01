import React from 'react';
import AvailableCoins from './AvailableCoins';

const Money = (props) => {
  return <div className='order'>
    <h3 className='t-center'>Money</h3>
    <AvailableCoins/>

    <div className='form-group'>
      <label>Amount of coin</label>
      <input type='text' name='productNumber'/>
      <button className='btn btn-default add-coin'>Drop Coin</button>
    </div>
  </div>;
};

export default Money;