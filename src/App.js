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
      door1_isOpen: true,
      door2_isOpen: true
    };
    
    // poll /update every 10 seconds
    setInterval(()=> this.getUpdate(), 1000);
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
        <DoorSection doorNumber={1} value={this.door1_isOpen()} />
        <DoorSection doorNumber={2} value={this.door2_isOpen()} />
      </div>
    );
  }
}

class DoorSection extends React.Component {
  constructor(props) {
    super(props);
  }

  door_isOpen() {
    return this.props.value === true;
  }

  render() {
    return (
      <div>
        Door { this.props.doorNumber }: { this.door_isOpen() ? "Opened" : "Closed"}
        { this.door_isOpen() ? <ApiButton label={`Close Door ${ this.props.doorNumber }`} action={`cdoor${ this.props.doorNumber }`} /> : null}
        { !this.door_isOpen() ? <ApiButton label={`Open Door ${ this.props.doorNumber }`} action={`odoor${ this.props.doorNumber }`} /> : null}
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
