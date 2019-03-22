import Product from './Product'
import React, { Component } from 'react'
import {connect} from 'react-redux';

export class Products extends Component {
  render() {
    return (
      <div className="brands-container">
            {
                this.props.products.map(product=><Product key={product.name} product={product}/>)
            }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Products);