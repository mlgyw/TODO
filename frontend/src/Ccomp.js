import React, {Component} from "react";
import { ReactDOM } from "react";
import Icomp from "./Icomp.js";

export default class Ccomp extends Component{

    constructor(props){
        super(props);

    }
  
      render() {
        const items = this.props.items
        
         return (
          <div>
            <h1>Task List</h1>
            <ul id="qwe">
              {items.map(item => {
                return <li key={`item-${item.id}`}><Icomp id={item.id} isComplete= {item.isComplete}/>  {item.task} {item.isComplete}</li>
              })}
            </ul>
          </div>
        )
      }
    }
    







