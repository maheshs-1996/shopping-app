import React, {Component} from 'react';
import HomepageComponent from './pages/homepage/homepage-component'

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
        <HomepageComponent />
      </div>
    );
  }
}

export default App;
