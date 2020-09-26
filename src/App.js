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
      Door1_isOpen: true,
      Door2_isOpen: true
    };
    
    // poll /update every 10 seconds
    setInterval(()=> this.getUpdate(), 10000);
  }
  getUpdate() {
    fetch('/update')
      .then(response=>{
        console.debug(response);
        return response.json();
      })
      .then(data => {
        console.debug(data);
        this.setState({
          door1_isOpen: data.door1_isOpen,
          door2_isOpen: data.door2_isOpen
        });
      });
  }

  door1_isOpen() {
    return this.state.door1_isOpen === true;
  }
  door2_isOpen() {
    return this.state.door2_isOpen === true;
  }

  render() {
    return (
      <div className="GarageDoorController">
        <h1>Garage Door Client</h1>

        <div>Door 1: { this.door1_isOpen() ? "Opened" : "Closed"}</div>
        <div>Door 2: { this.door2_isOpen() ? "Opened" : "Closed"}</div>

        {this.door1_isOpen()
          ? <ApiButton label="Close Door 1" action="cdoor" />
          : <ApiButton label="Open Door 1" action="odoor" /> }

        {this.door1_isOpen()
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
