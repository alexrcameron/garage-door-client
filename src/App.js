import React from 'react';
import './App.css';

  
function App() {
  return (
    <div className="App">
      <h1>Garage Door Client</h1>
      <ApiButton label="Open Door 1" action="odoor" />
      <ApiButton label="Close Door 1" action="cdoor" />
      <ApiButton label="Open Door 2" action="odoor2" />
      <ApiButton label="Close Door 2" action="cdoor2" />
    </div>
  );
}

class ApiButton extends React.Component {
  handleClick() {
    fetch(`/${this.props.action}`).then(
      () => console.log(""),
      (error) => console.log(error)
    );
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>{this.props.label}</button>
    );
  }
}

export default App;
