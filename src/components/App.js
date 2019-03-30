import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Calendar from 'react-calendar';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar /><br />
        <h1>Have you been exercising?</h1><br />
        <Calendar />
      </div>
    );
  }
}

export default App;
