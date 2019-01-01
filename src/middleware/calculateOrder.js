import { SET_PRODUCT_NUMBER, SET_AMOUNT, PRODUCT_NUMBER_VALIDATION_ERROR } from '../actionTypes';
import { setTotalCost } from '../actions/order';
import { calculateTotalCost } from '../services/order';

export default ({ dispatch, getState}) => next => action => {
  const { type, id, amount } = action;

  if (type === SET_PRODUCT_NUMBER) {
    const { order, products } = getState();
    if (order && order.amount) {
      const price = products[id].price;
      dispatch(setTotalCost(calculateTotalCost(price, order.amount)));
    }
  }
  if (type === SET_AMOUNT) {
    const { order, products } = getState();
    if (order && order.isValid) {
      const price = products[order.productNumber].price;
      dispatch(setTotalCost(calculateTotalCost(price, amount)));
    }
  }
  if (type === PRODUCT_NUMBER_VALIDATION_ERROR) {
    dispatch(setTotalCost(null));
  }
  return next(action);
};