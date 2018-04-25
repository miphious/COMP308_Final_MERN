import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyClinic</h1>
        </header>
        <p className="App-intro">
          MyClinic is used in our various clinics across ontario, to help patients and nurses.
          Nurses can monitor patients during the first weeks of their release form the clinic.
          Patients can monitor ther own daily activites as well.
          To begin please Log In or Register if you are a new user. 
        </p>
      </div>
    );
  }
}

export default App;
