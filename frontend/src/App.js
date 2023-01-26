import React, {useState, useEffect, useCallback, Component} from 'react'
import logo from './logo.svg';
import './App.css';
// import { response } from 'express';
 import Ccomp from './Ccomp.js';

 export default class App extends Component{
  
  items = []
  constructor(){
    super()
    this.state = {
      inputValue:""
  };
  }

  async componentDidMount() {
    var myRequest = new Request('/api/task/wiewTask');

    let response = await fetch(myRequest)
    let data =  await response.json()
    this.items.length=0;
    this.items.push(...data.message)
    this.setState({inputValue:""})
  }
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <div>
  <input onChange={e=>this.setState({inputValue: e.target.value})}/>
  <p>{this.state.inputValue}</p>
  <button onClick={ ()=> {
    fetch('/api/task/createTask?task='+this.state.inputValue+'&isComplete='+false);
    this.componentDidMount()
  }
    }/>
  </div>

  <Ccomp items= {this.items}/>

       </header>
     </div>
    )
  }
}
