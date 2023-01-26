import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
// import { response } from 'express';
import Ccomp from './Ccomp.js';

function App() {
const [data, setData] = useState(null)
useEffect(()=>{
  fetch('/api/task/wiewTask')
  .then((response)=>response.json())
  .then(response =>setData(response.message))
},[])
let a = !!data ? JSON.parse(data) : []

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          {
            
            a.length  ===0 ? "loading...": a.map((item)=>item.id)   //JSON.stringify(data)


          } 
        </p>
        
        {/* <textarea> // текст в несколько строк 
      Привет, это часть текста в многострочном текстовом поле
        </textarea> */}
<Ccomp/>
        {/* <label>
          Выберите ваш любимый вкус:
          <select value={grapefruit} onChange={newwalue}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label> */}
        
      </header>
    </div>
  );
}

export default App;
