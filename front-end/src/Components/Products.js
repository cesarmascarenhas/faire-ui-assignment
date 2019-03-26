import Product from './Product'
import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as Helpers from '../Helpers';

export class Products extends Component {
    
  

  render() {
    return (
      <div className="brands-container">
            {
                Helpers.fillRow(this.props.products).map((product,index)=><Product key={product.name+index} product={product}/>)
            }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Products);