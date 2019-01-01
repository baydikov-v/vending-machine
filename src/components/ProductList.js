import React, { memo } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Product from './Product';

const ProductMemo = memo(Product);

const ProductList = (props) => {
  const { products } = props;
  return <div className='product-list'>
    <h3>Products</h3>
    {_.size(products) ?
      <div className='product-list-inner'>
        {
          _.map(products, item => <ProductMemo
            key={`product_${item.id}`}
            title={item.title}
            productNumber={item.id}
            price={item.price}
          />)
        }
      </div>
      : ''
    }
  </div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductList);