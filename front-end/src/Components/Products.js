import Product from './Product'
import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as Helpers from '../Helpers';
import * as ACTIONS from '../Actions'
import * as API from '../Api'
import loading_img from '../Assets/loading.svg';
import faire_img from '../Assets/faire_f.png';

export class Products extends Component {
    
  componentDidMount(){
    
    API.fetchProducts(this.props.token)
      .then((data) => {
          this.props.dispatch(ACTIONS.fetchProducts(data));
      })
  }

  render() {
    return (
      <div>
      { this.props.loading ? 
        <div className="loading">
          <img src={loading_img} alt="loading"/>
          <img src={faire_img} alt="loading"/>
        </div>
        : 
        <div className="brands-container">
            {
                Helpers.fillRow(this.props.products).map((product,index)=><Product key={product.name+index} product={product}/>)
            }
        </div>
      }
      </div>      
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Products);