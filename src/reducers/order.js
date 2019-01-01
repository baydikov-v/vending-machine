import {
  SET_PRODUCT_NUMBER,
  PRODUCT_NUMBER_VALIDATION_ERROR,
  SET_AMOUNT,
  SET_TOTAL_COST,
  BUY
} from '../actionTypes';

const defaultState = {
  productNumber: '',
  amount: '',
  totalCost: null,
  isValid: false,
  errors: {}
};

export default (state = defaultState, action) => {
  const { type, id, amount, totalCost, error } = action;

  switch (type) {
    case SET_PRODUCT_NUMBER:
      return {
        ...state,
        productNumber: id,
        isValid: true,
        errors: {
          ...state.errors,
          productNumber: null
        }
      };
    case PRODUCT_NUMBER_VALIDATION_ERROR:
      return {
        ...state,
        productNumber: id,
        isValid: false,
        errors: {
          ...state.errors,
          productNumber: error
        }
      };
    case SET_AMOUNT:
      return {
        ...state,
        amount,
      };
    case SET_TOTAL_COST:
      return {
        ...state,
        totalCost,
      };
    case BUY:
      return defaultState;
    default:
      return state;
  }
};