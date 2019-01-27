import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import posed from 'react-pose';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Cart from './components/Cart';



class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

 

  render() {
    const { cookies } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation cookies={cookies} />
          <Route exact path='/' render={() => <Dashboard cookies={cookies} />} />
          <Route exact path='/cart' render={() => <Cart cookies={cookies} />} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
