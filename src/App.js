import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Order from './components/Order';
import Balance from './components/Balance';
import TransactionsList from './components/TransactionsList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1 className='app-header'>Vending Machine</h1>
          <div className='content'>
            <ProductList/>
            <div className='right-panel'>
              <Order/>
              <Balance/>
            </div>
            <TransactionsList/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
