import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './Assets/doctor.jpg';
import './App.css';
import Header  from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Header/>
        <br/>
        <div className="w3-container">
        <img src={logo} className="image" alt="doctor"/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyClinic</h1>
        </header> */}

        <p className="App-intro">
          MyClinic is used in our various clinics across ontario, to help patients and nurses.
          Nurses can monitor patients during the first weeks of their release form the clinic.
          Patients can monitor ther own daily activites as well.
          To begin please Log In or Register if you are a new user. 
        </p>
        </div>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
