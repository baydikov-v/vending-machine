import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Transaction from './Transaction';

const TransactionMemo = memo(Transaction);

const TransactionsList = (props) => {
  const { transactions } = props;
  return <div className='transactions-list'>
    <h3 className='t-center'>Transactions</h3>
    {transactions.length ?
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Count</th>
            <th>Paid</th>
            <th>Change</th>
            <th>Date Time</th>
          </tr>
        </thead>
        <tbody>
        {transactions.map(item => <TransactionMemo
          key={`transaction_${item.id}`}
          productName={item.productName}
          count={item.count}
          paid={item.paid}
          totalCost={item.totalCost}
          change={item.change}
          dateTime={item.dateTime}
        />)}
        </tbody>
      </table>
      : ''
    }
  </div>;
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

TransactionsList.propTypes = {
  transactions: PropTypes.array
};

export default connect(mapStateToProps)(TransactionsList);