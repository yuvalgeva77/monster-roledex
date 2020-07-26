import React,{Component} from 'react';
import {CarrdList, CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state={
   monsters:[],
   searchFiels:' '
  };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }



  render(){
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e=>{
          this.setState({searchFiel: e.target.value}, ()=> //setState is a-sincrinic this is a calback wich runs after setState is finished
          console.log(this.state));}}
          />
        <CardList monsters={this.state.monsters}>
        </CardList> 
      </div>
    );
  }
}

export default App;
