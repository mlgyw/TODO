import React, {Component} from "react";

export default class Icomp extends Component{
b = null;
    constructor(props){
        super(props);

        this.state = {
          status: true,
        };
    };

        async componentDidMount() {
          this.b = this.props.isComplete
        }

     
      render() { 
         return (
            console.log(this.props.id), 
          <div>{ 
                  <input id={this.props.id} type="checkbox" 
                   defaultChecked = {this.b}
                     onChange =  { (event)=> {  this.b=!this.b
                       fetch('/api/task/changeStatus?id='+this.props.id+'&isComplete='+this.b);
                       console.log(this.b)
                     }
                       }
                   /> 
          }
          </div>
        )
      }
    }