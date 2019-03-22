import React, { Component } from 'react'
import Brands from './Brands';
import Header from './Header';
import * as API from '../Api'
import * as ACTIONS from '../Actions'

import {connect} from 'react-redux';

export class Home extends Component {

    componentDidMount(){
        API.fetchSearch({category:'New'})
        .then( 
          (data) => {
            this.props.dispatch(ACTIONS.fetchBrands(data.brands));
            this.props.dispatch(ACTIONS.setCategory('New'));
          }  
        ) 
    }

  render() {
    return (
      <div>
            <Header />
            {this.props.brands.length > 0 ? <Brands /> : ''}            
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
}
  
export default connect(mapStateToProps)(Home);