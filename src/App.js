import React, {Component} from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import CardList from './Components/Card-list/card-list.component'
import {SearchBox} from './Components/SearchBox/searchboox.component'

class App extends Component
{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentWillMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then(users => this.setState({monsters : users}))
  }
  
  render()
  {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter
    (monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox  
        placeholder='Search Monster'
        handleChange={e => this.setState({searchField: e.target.value})}/>
            <CardList monsters={filteredMonsters}  />
      </div>
      
    );
  }s
}
export default App;


//handleChange={e => this.setState({searchField: e.target.value})}/>
      
//"predeploy" : "yarn build",
//"deploy" : "gh-pages -d build"