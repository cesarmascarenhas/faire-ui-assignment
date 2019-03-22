import React, { Component } from 'react'
import right_arrow from '../Assets/right-arrow.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export  class Categories extends Component {
  
  state={
    category:'New',
    subcategory:[],
    opened:''
  }

  showSubCategory(subcategory,opened){
    
    if(!this.state.subcategory.length){
      this.setState(
        {
          subcategory,
          opened
        }
      );
    } else {
      if(opened !== this.state.opened){
        this.setState(
          {
            subcategory,
            opened
          }
        )
      } else {
        this.setState({subcategory:[],opened:''});
      }
     
    }
    
  }

  render() {
    
    const categories = this.props.categories;
    const {subcategory,opened} = this.state;
    
    return (
      <div className="categories">
        <ul>
            {
              categories.map(
                category => 
                <li key={category.name}> 
                  <Link to={`/category/${category.name}`}>{ this.props.category === category.name || category.sub_categories.some(sub=>sub.name === this.props.category) ? <b>{category.name}</b> : category.name}</Link> 
                  { category.sub_categories.length > 0 ? <img key={category.sub_categories.name} className={ opened === category.name ? 'open' : '' } onClick={()=>this.showSubCategory(category.sub_categories, category.name)} style={{marginLeft:4}} src={right_arrow} alt="" width="12" height="12"/> : ''}
                </li>
              )
            }
        </ul>
        
              {
                subcategory.length > 0 ?
                <div className="sub-categories">
                  <div className="sub-categories-container">
                    <h3>{opened}</h3>
                    <ul>
                      {subcategory.map(category=>
                        <li  key={`sub-${category.name}`}> 
                          <Link to={`/category/${category.name}`}>
                            {this.props.category === category.name ? <b>{category.name}</b> : category.name }
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                :
                ''
              }
       
      </div>
    )

  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Categories);