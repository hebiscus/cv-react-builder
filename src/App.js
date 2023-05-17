import React from 'react';
import { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import EditButton from './components/EditBtn';
import SubmitButton from './components/SubmitBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
 

  render () {
    return (
      <div className='app-content'>
        <h3>Personal Details</h3>
        <GeneralInfo />
        <div>
          <EditButton />
          <SubmitButton />
        </div>
        <h3>Professional experience</h3>
        <Experience />
        <div>
          <EditButton />
          <SubmitButton />
        </div>
        <h3>Education</h3>
        <Education />
        <div>
          <EditButton />
          <SubmitButton />
        </div>
      </div>
    );
  }
}

export default App;
