import React from 'react';
import PropTypes from 'prop-types';

const Transaction = (props) => {
  return <tr>
    <td>{props.productName}</td>
    <td>{props.count}</td>
    <td>${props.paid}</td>
    <td>${props.change.toFixed(2)}</td>
    <td>{props.dateTime}</td>
  </tr>
};

Transaction.propTypes = {
  productName: PropTypes.string,
  count: PropTypes.string,
  paid: PropTypes.number,
  change: PropTypes.number,
  dateTime: PropTypes.string,
};

export default Transaction;