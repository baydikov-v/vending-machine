import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import validateOrder from './middleware/validateOrder'
import calculateOrder from './middleware/calculateOrder'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      validateOrder,
      calculateOrder,
    )
  )
);

export default store;