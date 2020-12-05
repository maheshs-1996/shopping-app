import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header'
import { Route, Switch } from 'react-router-dom'

import './App.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
