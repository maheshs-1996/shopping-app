import React, {Component} from 'react';
import Homepage from './pages/homepage/homepage-component'
import {Route, Switch} from 'react-router-dom'

import './App.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
    }
  }
  
  render(){
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      </div>
    );
  }
}

export default App;
