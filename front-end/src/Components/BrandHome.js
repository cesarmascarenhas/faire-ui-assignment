import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from './Header';
import Products from './Products'
import * as Actions from '../Actions'
import * as API from '../Api'
import eco_friendly_badge from '../Assets/eco.svg';
import charitable_badge from '../Assets/charity.svg';
import handmade_badge from '../Assets/handmade.svg';
import location_badge from '../Assets/location.svg';
import creation_year_badge from '../Assets/birthday.svg';


export class BrandHome extends Component {
  
  getBrandProps(token){
      return this.props.brands.filter(brand => brand.token === token)[0];
  }

  componentDidMount(){
      API.fetchProducts(this.props.match.params.token)
      .then((data) => {
          this.props.dispatch(Actions.fetchProducts(data));
      })
  }

  render() {
    const brand = this.getBrandProps(this.props.match.params.token)
    return (
      <div>
        <Header />
        { brand ? 
            <div className="brand">
                <div className="brand-cover" style={{backgroundImage:`url(${brand.images[0].url})`,backgroundSize:'cover'}}>
                        <div className="brand-profile">
                            <img src={brand.images[1].url} alt={brand.name}/>
                        </div>
                </div>
                <div>
                    <h2>{brand.name}</h2>
                    <div className="brand-profile-badges">
                        <ul>
                        {brand.eco_friendly ?  <li><img src={eco_friendly_badge} alt=""/><span>Eco Friendly</span></li> : ''}
                        {brand.hand_made    ?  <li><img src={charitable_badge} alt=""/><span>Charitable</span></li> : ''}
                        {brand.charitable   ?  <li><img src={handmade_badge} alt=""/><span>Hand Made</span></li> : ''}
                            <li><img src={location_badge} alt="location"/><span>{brand.based_in_city}</span></li>
                            <li><img src={creation_year_badge} alt="location"/><span>{brand.creation_year}</span></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
          :
            ''            
        }        
        <Products />
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(BrandHome)