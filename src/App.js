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
    fetch("/logout").then(null,
      (error) => console.log(error)
    );
    window.location.reload();
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>Logout</button>
    );
  }
}

export default App;
