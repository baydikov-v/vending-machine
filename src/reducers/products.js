import products from '../data/products';
import _ from 'lodash';

const defaultState = _.mapKeys(products, 'id');

export default (state = defaultState, action) => {
  return state;
};