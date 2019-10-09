import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    // input can change data
    count: 0
  };

  add = () => {
    // if change state do not dirctly, bcz react do not refresh render function 
    this.setState(current => ({ count:current.count + 1 }))
  };

  minus = () => {
    this.setState(current => ({ count:current.count - 1 }))
  };

  componentDidMount(){
    console.log("component mount")
  };

  componentDidUpdate(){
    console.log("component update")
  };

  render(){
    console.log("rendering")
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
