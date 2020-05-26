import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container/>
      </div>
    );
  }
}

const Container = (props) => {
  return (
    <div className="wrapper">
      <h2> Welcome to Twitter!</h2>
        <div><p>Enter your username or email:</p>
          <input type="text"></input>
        <p>Password:</p>
          <input type="password"></input></div>
    </div>
  );
}

export default App;