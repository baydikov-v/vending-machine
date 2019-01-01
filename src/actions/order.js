import { SET_PRODUCT_NUMBER, PRODUCT_NUMBER_VALIDATION_ERROR, SET_AMOUNT, SET_TOTAL_COST } from '../actionTypes';

export function setProductNumber(id) {
  return {
    type: SET_PRODUCT_NUMBER,
    id,
  };
}

export function productNumberNotValid(id, error) {
  return {
    type: PRODUCT_NUMBER_VALIDATION_ERROR,
    id,
    error,
  };
}

export function setAmount(amount) {
  return {
    type: SET_AMOUNT,
    amount,
  };
}

export function setTotalCost(totalCost) {
  return {
    type: SET_TOTAL_COST,
    totalCost,
  };
}