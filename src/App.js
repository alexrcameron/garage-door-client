import React from 'react';
import './App.css';

  
function App() {
  return (
    <div className="App">
      <h1>Garage Door Client</h1>
      <LogoutButton />
    </div>
  );
}

class LogoutButton extends React.Component {
  handleClick() {
    fetch("/logout")
      .then(
        (res) => console.log(res),
        (error) => console.log(error)
      );
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>Logout</button>
    );
  }
}

export default App;
