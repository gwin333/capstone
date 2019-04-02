import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Calendar from 'react-calendar';
import Form from './Form';
import { format } from 'date-fns';

const dateString = format(new Date(), 'yyyy-MM-dd')
console.log(dateString)

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedDay: new Date()
    }
  }

  onChange = selectedDay => this.setState({ selectedDay })

  render() {

    return (
      <div className="App">
        <Navbar /><br />
        <h1>Have you been exercising?</h1><br />
        <div className="row">
          <div className="col">
            <Calendar
              onChange={this.onChange}
              value={this.state.selectedDay}
            />
          </div>
          <div className="col">
            <Form
              value={format(this.state.selectedDay, 'yyyy-MM-dd')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
