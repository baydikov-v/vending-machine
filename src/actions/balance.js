import { ADD_MONEY, ADD_MONEY_VALIDATION_ERROR } from '../actionTypes';

export function addMoney(amount) {
  return {
    type: ADD_MONEY,
    amount,
  }
}

export function amountNotValid(error) {
  return {
    type: ADD_MONEY_VALIDATION_ERROR,
    error,
  }
}