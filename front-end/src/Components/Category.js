import React, { Component } from 'react'
import Brands from './Brands';
import Header from './Header';
import * as API from '../Api'
import * as ACTIONS from '../Actions'
import {connect} from 'react-redux';

export class Category extends Component {

    state={
        category:'New'
    }

    getCategoryData(category){
        API.fetchSearch({category})
        .then( 
          (data) => {
            this.props.dispatch(ACTIONS.fetchBrands(data.brands));
            this.props.dispatch(ACTIONS.setCategory(category));
          }  
        )
    }

    componentDidMount(){
       this.getCategoryData(this.state.category);
    }
    
    componentDidUpdate(){
        
        const category = this.props.match.params.cat
        if(category !== this.state.category){
            
            this.setState({category})
            this.getCategoryData(category);
        }
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
  
export default connect(mapStateToProps)(Category);