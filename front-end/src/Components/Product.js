import React, { Component } from 'react';
import returnable_badge from '../Assets/returnable.svg';
import custom_badge from '../Assets/custom.svg';


export default class Product extends Component {
  

    render() {

    if(this.props.product.fix){
        return (
          <div className="brand-props fix-row"></div>
        )
    }
    
    const {
      name,
      wholesale_price_cents,
      images,
      returnable,
      custom,
      categories
    } = this.props.product;
    const whole = wholesale_price_cents/100;
    return (
      <div className="brand-props">        
        <div className="brand-img product">
            
                <img src={images[0].url} alt=""/>
            
            <div className="brand-badges">
              <ul>
                {returnable ?  <li><img src={returnable_badge} alt=""/><span>Returnable</span></li> : ''}
                {custom     ?  <li><img src={custom_badge} alt=""/><span>Custom</span></li> : ''}
                {categories.length > 0 ? <li>{categories.slice(0,4).map(category=><span>{category}</span>)}
                  { categories.length > 4 ? <span style={{fontSize:9,fontWeight:'bold'}}>And {categories.length - 4} more</span> : '' } </li> : ''}
              </ul>
            </div>
            <button>Mine!</button> 
        </div>
        <div>
            <p className="brand-name">{name}</p>
            <p className="brand-minimum">{
              whole === 0 ? '' : `$${whole} Whole Sale` 
            }</p>
        </div>
              
      </div>
    )
  }
}
