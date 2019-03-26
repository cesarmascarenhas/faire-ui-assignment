import React, { Component } from 'react'
import Header from './Header';
import Brands from './Brands';
import Pagination from './Pagination';
import * as API from '../Api'
import * as ACTIONS from '../Actions'
import {connect} from 'react-redux';
import loading_img from '../Assets/loading.svg';
import faire_img from '../Assets/faire_f.png';

export class Category extends Component {

    getCategoryData(category,page){

        window.scrollTo({
          top: 0,
          left: 0
        });

        this.props.dispatch(ACTIONS.loading(true));
        API.fetchSearch({
          category:category,
          pagination_data:{
              page_number:page
          }
        })
        .then( 
          
          (data) => {
            
            let page  = data.pagination_data.page_number;
            let total = data.pagination_data.page_count;
            return new Promise((resolve, reject) =>{

              this.props.dispatch(ACTIONS.setPagination(page,total));
              this.props.dispatch(ACTIONS.setCategory(category));
              this.props.dispatch(ACTIONS.fetchBrands(data.brands)); 
              
              resolve()
            
            })
            
            
          }  
        ).then((data) => {
          this.props.dispatch(ACTIONS.loading(false));
        })
    }
    
    componentDidMount(){
      
      const category  = this.props.match.params.cat  ? this.props.match.params.cat : 'New'
      const page      = this.props.match.params.page ? parseInt(this.props.match.params.page) : 1 
      console.log('m',page !== this.props.pagination.page, page,this.props.pagination.page)      
      this.getCategoryData(category,page);
         
    }
    
    componentDidUpdate(){
        // If no category is received, 'New' is set.
        const category  = this.props.match.params.cat  ? this.props.match.params.cat : 'New'
        const page      = this.props.match.params.page ? parseInt(this.props.match.params.page) : 1
        
        if(category !== this.props.category || page !== this.props.pagination.page){            
            this.getCategoryData(category,page);
        }
    }

  render() {
    
    return (
      <div>
            <Header />
            
            {this.props.loading ? 
              <div className="loading">
                <img src={loading_img} alt="loading"/>
                <img src={faire_img} alt="loading"/>
              </div>
              : 
              <div>
                {this.props.brands.length > 0 ? <Brands /> : ''}
                <Pagination page={this.props.match.params.page} /> 
              </div>
            }
             
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
}
  
export default connect(mapStateToProps)(Category);