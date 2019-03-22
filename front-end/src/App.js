import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as API from './Api'
import * as ACTIONS from './Actions'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Components/Home';
import Category from './Components/Category';
import BrandHome from './Components/BrandHome';
class App extends Component {
  componentDidMount(){   
      
        API.fetchInitApp()
        .then( 
          (data) => {
            this.props.dispatch(ACTIONS.fetchCategories(data[0]));
          }  
        ) 
      
       
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Route>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category/:cat" render={(props) => <Category {...props}/> } />
              <Route exact path="/brand/:token" render={(props) => <BrandHome {...props}/> } />
            </Switch>
          </Route>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
