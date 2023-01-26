import React, {Component} from "react";
import { ReactDOM } from "react";

export default class Ccomp extends Component{

    constructor(){
        super();
    }
      
      render() {
        const items = this.props.items
        
         return (
          <div>
            <h1>Task List</h1>
            <ul id="qwe">
              {items.map(item => {
                return <li key={`item-${item.id}`}> {item.task} {item.isComplete}</li>
              })}
            </ul>
          </div>
        )
      }
    }
    







