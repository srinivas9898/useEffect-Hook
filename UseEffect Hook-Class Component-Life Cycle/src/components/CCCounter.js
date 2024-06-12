import React, { Component } from 'react'

export default class CCCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        score:0,
        age:0,
      };
    }

    componentDidMount(){
        console.log(`CC - loaded`);
    }

    shouldComponentUpdate(){
        console.log(`CC -  shouldComponentUpdate`);
        return true;
    }

    componentDidUpdate(){
        console.log(`CC - componentDidUpdate`);
    }

    componentWillUnmount(){
        console.log(`CC - will unloaded`)
    }

  render() {
    console.log(`render`);
    return (
        <div className="score">
        <h1>CC Counter</h1>
        <h1> Score:{this.state.score}</h1>
        <button onClick={()=>{
            this.setState({score:this.state.score+1});
        }}>Increment Score</button>
        <button onClick={()=>{
            this.setState({score:this.state.score-1});
        }}>Decrement Score</button>

<h1>Age:{this.state.age}</h1>
        <button onClick={()=>{
           this.setState({age:this.state.age+1});
        }}>Increment Age</button>
        <button onClick={()=>{
             this.setState({age:this.state.age-1});
        }}>Decrement Age</button>
    </div>
    );
  }

}
