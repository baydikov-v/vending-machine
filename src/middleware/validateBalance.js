import { ADD_MONEY, SET_TOTAL_COST } from '../actionTypes';
import { amountNotValid } from '../actions/balance';
import { addMoney, makeChange } from '../services/balance';

export default ({ dispatch, getState}) => next => action => {
  const { type, amount } = action;
  if (type === ADD_MONEY) {
    const { coins, balance, order } = getState();
    if (coins.indexOf(+amount) === -1) {
      return next(amountNotValid('This coin isn\'t valid'));
    }
    if (addMoney(amount, balance.amount) < order.totalCost) {
      return next({
        ...action,
        error: 'Not enough money for this product'
      });
    } else {
      const change = parseInt((addMoney(amount, balance.amount) - order.totalCost) * 100);
      if (makeChange(change, [...coins]) > 0) {
        return next({
          ...action,
          error: 'Sorry, we have no change for that amount'
        });
      }
    }
  }
  if (type === SET_TOTAL_COST) {
    const { balance, coins } = getState();
    if (balance.amount < action.totalCost) {
      dispatch(amountNotValid('Not enough money for this product'));
    } else {
      const change = parseInt((balance.amount - action.totalCost) * 100);
      if (makeChange(change, [...coins]) > 0) {
        dispatch(amountNotValid('Sorry, we have no change for that amount'));
      }
    }
  }
  return next(action);
};