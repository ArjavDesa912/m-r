import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.components.jsx';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';
 class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state= {
      monsters:[],
      searchField:``
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(Response=>Response.json()).then(identity =>this.setState({monsters:identity}))
    
  }

  render(){
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
  
     <SearchBox 
     placeholder ={'search monsters'} 
     handleChange={e=>this.setState({searchField:e.target.value})} ></SearchBox>
     <CardList monsters={filteredMonsters} ></CardList>
     
      
      </div>
  );}
}

export default App;
