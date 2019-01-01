import { BUY } from '../actionTypes';
import moment from 'moment';

export default ({ dispatch, getState}) => next => action => {
  const { type } = action;

  if (type === BUY) {
    const { order, balance, products } = getState();
    return next({
      ...action,
      transaction: {
        id: Date.now(),
        productName: products[order.productNumber].name,
        count: order.amount,
        paid: balance.amount,
        totalCost: order.totalCost,
        change: balance.amount - order.totalCost,
        dateTime: moment().format('YYYY-MM-DD h:m:s')
      }
    });
  }
  return next(action);
}