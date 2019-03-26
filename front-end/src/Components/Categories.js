import React, { Component } from 'react'
import right_arrow from '../Assets/right-arrow.svg'
import circle_left_arrow from '../Assets/circle-left-arrow.svg'
import circle_right_arrow from '../Assets/circle-right-arrow.svg'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export  class Categories extends Component {
  
  state={
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

  handleCategoriesScroll(){
    const category_scroll = document.querySelector('.categories-inner');
    
    const next = document.querySelector('.cat-nav.next');
    const prev = document.querySelector('.cat-nav.prev');

    next.addEventListener('click',()=>{
      let x = category_scroll.scrollLeft + 200;
      category_scroll.scrollTo({
        top: 0,
        left: x,
        behavior: 'smooth'
      });
    })

    prev.addEventListener('click',()=>{
      let x = category_scroll.scrollLeft - 200;
      category_scroll.scrollTo({
        top: 0,
        left: x,
        behavior: 'smooth'
      });
    })

    let is_scrolling;
    
    category_scroll.addEventListener('scroll',()=>{
      
      //throttle scroll
      clearTimeout( is_scrolling );
      is_scrolling = setTimeout(function() {
        
        let x_scroll = Math.ceil(category_scroll.scrollLeft +  category_scroll.getBoundingClientRect().width);
       
        if(x_scroll >= category_scroll.scrollWidth){
          next.style.display = 'none';
        } else {
          next.style.display = 'initial';
        }

        if(category_scroll.scrollLeft === 0){
          prev.style.display = 'none';
        } else {
          prev.style.display = 'initial';
        }  

      }, 100);

    })
  }

  componentDidMount(){
    this.handleCategoriesScroll();    
  }

  render() {
    
    const categories = this.props.categories;
    const {subcategory,opened} = this.state;
    
    return (
      <div>
      <div className="categories">
        <div className="categories-inner">
          <ul>
              {
                categories.map(
                  category => 
                  <li key={category.name}> 
                    <Link to={`/category/${category.name}`}>{ this.props.pagination.category === category.name || category.sub_categories.some(sub=>sub.name === this.props.category) ? <b>{category.name}</b> : category.name}</Link> 
                    { category.sub_categories.length > 0 ? <img key={category.sub_categories.name} className={ opened === category.name ? 'open' : '' } onClick={()=>this.showSubCategory(category.sub_categories, category.name)} style={{marginLeft:4}} src={right_arrow} alt="" width="12" height="12"/> : ''}
                  </li>
                )
              }
          </ul>
        </div>
        <div className="cat-nav prev"><img src={circle_left_arrow} alt=""/></div>
        <div className="cat-nav next"><img src={circle_right_arrow} alt=""/></div>
      </div>
      {
        subcategory.length > 0 ?
        <div className="sub-categories">
          <div className="sub-categories-container">
            <h3>{opened}</h3>
            <ul>
              {subcategory.map(category=>
                <li  key={`sub-${category.name}`}> 
                  <Link to={`/category/${category.name}`}>
                    {this.props.pagination.category === category.name ? <b>{category.name}</b> : category.name }
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