import { SET_PRODUCT_NUMBER } from '../actionTypes';
import { productNumberNotValid } from '../actions/order';

export default ({ dispatch, getState}) => next => action => {
  const { type, id } = action;
  if (type === SET_PRODUCT_NUMBER) {
    const { products } = getState();
    if (!products || !products.hasOwnProperty(id)) {
      return next(productNumberNotValid(id, 'Enter a valid product number'));
    }
  }
  return next(action);
};