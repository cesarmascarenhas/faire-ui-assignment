import React, { Component } from 'react'
import Categories from './Categories'
import logo from '../Assets/faire_000.png'
import basket from '../Assets/basket.svg'
import user from '../Assets/user.svg'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import location_badge from '../Assets/location.svg';

export  class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
           <Link to="/" style={{flexBasis:'100%'}}><img src={logo} alt="Faire"></img></Link>
           <div className='breadcrumbs'><img src={location_badge} alt="" /><span>{this.props.category}</span></div>
           <div className="header-profile">
                <ul>
                    <li>
                        <img src={basket} alt=""/>
                    </li>
                    <li>
                        <img src={user} alt=""/>
                    </li>
                </ul>
           </div>
        </div>
        <Categories categories={this.props.categories} />        
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
  }
  
export default connect(mapStateToProps)(Header);