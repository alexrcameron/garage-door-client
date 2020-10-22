import React from 'react';
import DoorControl from './components/DoorControl'
import './App.css';

var UPDATE_INTERVAL_ID = null;
  
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
      initialized: false,
      door1_isOpen: null,
      door2_isOpen: null,
      building_temp: null,
      fridge_temp: null,
      freezer_temp: null,
      lights_areOn: null
    };
    
    if(UPDATE_INTERVAL_ID) {
      clearInterval(UPDATE_INTERVAL_ID);
    }

    // poll /update every 5 seconds
    UPDATE_INTERVAL_ID = this.updateFn = setInterval(()=> this.getUpdate(), 5000);
  }
  getUpdate() {
    fetch(`${process.env.REACT_APP_API_URL_BASE}/update`)
      .then(response=>{
        console.debug(response);
        return response.json();
      })
      .then(data => {
        console.debug(data);
        this.setState({
          initialized: true,
          door1_isOpen: data.door1_isOpen,
          door2_isOpen: data.door2_isOpen,
          building_temp: data.building_temp,
          fridge_temp: data.fridge_temp,
          freezer_temp: data.freezer_temp,
          lights_areOn: data.lights_areOn
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
        <h1>Garage Control Panel</h1>
        <div className="status-section">
          { this.state.initialized ? (
              <div className="controls">
                <DoorControl doorNumber={1} value={this.door1_isOpen()} />
                <DoorControl doorNumber={2} value={this.door2_isOpen()} />
                <TemperatureDisplay name="building temp" temperature={this.state.building_temp} />
                <TemperatureDisplay name="fridge temp" temperature={this.state.fridge_temp} />
                <TemperatureDisplay name="freezer temp" temperature={this.state.freezer_temp} />
                <div>Lights: {this.state.lights_areOn ? "On" : "Off"}</div>
              </div>
            ) : (
              <div>Getting Data...</div>
            )
          }
        </div>
      </div>
    );
  }
}

function TemperatureDisplay(props) {
  return (
    <div>{props.name}: {props.temperature}&#176;F</div>
  );
}

export default App;
