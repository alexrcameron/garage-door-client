import React from 'react';
import './App.css';

  
function App() {
  
  return (
    <div className="App">
      <GarageDoorController />
    </div>
  );
}

class GarageDoorController extends React.Component {
  constructor(props) {
    super(props);
    
    // poll /update every 10 seconds
    setInterval(()=> this.getUpdate(), 10000);
  }
  getUpdate() {
    fetch('/update')
      .then(result => result.json())
      .then(result => {
        this.state.sensors = result;
        console.log(this.state.sensors);
      });
  }
  render() {
    return (
      <div className="GarageDoorController">
        <h1>Garage Door Client</h1>
        <ApiButton label="Open Door 1" action="odoor" />
        <ApiButton label="Close Door 1" action="cdoor" />
        <ApiButton label="Open Door 2" action="odoor2" />
        <ApiButton label="Close Door 2" action="cdoor2" />
      </div>
    );
  }
}

class ApiButton extends React.Component {
  handleClick() {
    fetch(`/${this.props.action}`, {
      method: 'POST'
    }).then(
      () => console.log(`${this.props.action} : SUCCESS`),
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
