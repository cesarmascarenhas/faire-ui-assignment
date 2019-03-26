import Brand from './Brand'
import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as Helpers from '../Helpers';

export class Brands extends Component {

  render() {
    return (
      <div className="brands-container">
            {
               Helpers.fillRow(this.props.brands).map(brand=><Brand key={brand.name} brand={brand}/>)
            }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Brands);