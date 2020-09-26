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

    this.state = {
      sensors: {}
    };
    
    // poll /update every 10 seconds
    setInterval(()=> this.getUpdate(), 10000);
  }
  getUpdate() {
    fetch('/update')
      .then(response=>{
        console.log(response);
        return response.json();
      })
      .then(data => {
        this.state.sensors = data;
        console.log(this.state.sensors);
      });
  }
  render() {
    return (
      <div className="GarageDoorController">
        <h1>Garage Door Client</h1>

        <div>Door 1: { this.state.sensors.Door1_isOpen ? "Opened" : "Closed"}</div>
        <div>Door 2: { this.state.sensors.Door2_isOpen ? "Opened" : "Closed"}</div>

        {this.state.sensors.Door1_isOpen
          ? <ApiButton label="Close Door 1" action="cdoor" />
          : <ApiButton label="Open Door 1" action="odoor" /> }

        {this.state.sensors.Door1_isOpen
          ? <ApiButton label="Close Door 2" action="cdoor2" />
          : <ApiButton label="Open Door 2" action="odoor2" />}
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
