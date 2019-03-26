import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from './Header';
import Products from './Products'
import * as ACTIONS from '../Actions'
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

    let category = this.props.match.params.cat;
    let page_number =  this.props.match.params.page;
    this.props.dispatch(ACTIONS.loading(true));
    
    API.fetchSearch({
      category,
      pagination_data:{
          page_number
      }
    })
    .then( 
      
      (data) => {
        
        let page  = data.pagination_data.page_number;
        let total = data.pagination_data.page_count;
        return new Promise(async (resolve, reject) =>{

          await this.props.dispatch(ACTIONS.setPagination(page,total,category));        
          await this.props.dispatch(ACTIONS.fetchBrands(data.brands));
          resolve(data);
        
        })
        
        
      }  
    ).then((data) => {        
      this.props.dispatch(ACTIONS.loading(false));
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
                            <img src={brand.squared_image.url} alt={brand.name}/>
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
        <Products token={this.props.match.params.token} />
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(BrandHome)