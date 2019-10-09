import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };

  componentDidMount(){
    setTimeout(() => {
      // state에 없는것을 선언해도 애러는 발생하지 않는다.
      this.setState({isLoading: false, book:false});
    }, 6000);
  };

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
