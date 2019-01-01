import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Order from './components/Order';
import Money from './components/Money';

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
              <Money/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
