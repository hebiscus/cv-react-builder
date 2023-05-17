import React from 'react';
import { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
 

  render () {
    return (
      <div className='app-content'>
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
