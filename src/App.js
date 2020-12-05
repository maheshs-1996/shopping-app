import {Component} from 'react';

import './App.css';
import CardList from './components/card-list/card-list-component'
import SearchBox from './components/search-box/search-box-component'
class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchString : ''
    }
  }

  handleSearch = e =>{
    this.setState({
      searchString : e.target.value
    })
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then((resp) => {
      return resp.json()
    }).then((users) => {
      this.setState({
        monsters:users
      })
    })
  }


  
  render(){
    let {monsters, searchString} = this.state
    monsters = monsters.filter((m) => m.name.toLowerCase().includes(searchString))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters.." onChange={this.handleSearch}/>
        <CardList monsters = {monsters} />
      </div>
    );
  }
}

export default App;
