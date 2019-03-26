import React, { Component } from 'react';
import eco_friendly_badge from '../Assets/eco.svg';
import charitable_badge from '../Assets/charity.svg';
import handmade_badge from '../Assets/handmade.svg';
import no_image from '../Assets/noimage.png';
import {Link} from 'react-router-dom';



export default class Brand extends Component {
    
    render() {
    
    if(this.props.brand.fix){
      return (
        <div className="brand-props fix-row"></div>
      )
    }

    const {
      name,
      minimum_order_amount_cents,
      eco_friendly,
      hand_made,
      charitable,
      categories,
      token,
      squared_image
    } = this.props.brand;
    const min = minimum_order_amount_cents/100;

    return (
      <div className="brand-props">        
        <div className="brand-img">
            <Link to={`/brand/${token}`}>
              <img src={squared_image ? squared_image.url : no_image} alt=""/>
            </Link>
            <div className="brand-badges">
              <ul>
                {eco_friendly ?  <li><img src={eco_friendly_badge} alt=""/><span>Eco Friendly</span></li> : ''}
                {hand_made    ?  <li><img src={charitable_badge} alt=""/><span>Charitable</span></li> : ''}
                {charitable   ?  <li><img src={handmade_badge} alt=""/><span>Hand Made</span></li> : ''}
                {categories.length > 0 ? <li>{categories.slice(0,4).map(category=><Link  key={category} to={`/category/${category}`}><span>{category}</span></Link>)}
                { categories.length > 4 ? <span style={{fontSize:9,fontWeight:'bold'}}>And {categories.length - 4} more</span> : '' } </li> : ''}
              </ul>
            </div>
        </div>
        <div>
            <Link to={`/brand/${token}`}><p className="brand-name">{name}</p></Link>
            <p className="brand-minimum">{
              min === 0 ? 'No Minimum' : `$${min} Minimum` 
            }</p>
        </div>        
      </div>
    )
  }
}
