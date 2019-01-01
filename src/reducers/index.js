import { combineReducers } from 'redux';
import products from './products';
import coins from './coins';
import order from './order';
import transactions from './transactions';

export default combineReducers({
  products,
  coins,
  order,
  transactions,
});
