import { BUY } from "../actionTypes";

export default (state = [], action) => {
  const { type, transaction } = action;

  switch (type) {
    case BUY:
      return [
        ...state,
        transaction
      ];
    default:
      return state
  }
};