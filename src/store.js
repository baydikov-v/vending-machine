import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import validateOrder from './middleware/validateOrder';
import calculateOrder from './middleware/calculateOrder';
import validateBalance from './middleware/validateBalance';
import transactions from './middleware/transactions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      validateOrder,
      calculateOrder,
      validateBalance,
      transactions,
    )
  )
);

export default store;