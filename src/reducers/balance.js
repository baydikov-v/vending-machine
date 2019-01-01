import { ADD_MONEY, ADD_MONEY_VALIDATION_ERROR, BUY } from '../actionTypes';
import { addMoney } from '../services/balance';

const defaultState = {
  amount: 0,
  error: null
};

export default (state = defaultState, action) => {
  const { type, amount, error, transaction } = action;

  switch (type) {
    case ADD_MONEY:
      return {
        ...state,
        amount: addMoney(amount, state.amount),
        error,
      };
    case ADD_MONEY_VALIDATION_ERROR:
      return {
        ...state,
        error
      };
    case BUY:
      return {
        ...state,
        amount: state.amount - transaction.totalCost
      };
    default:
      return state;
  }
};