import React from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {

  return (
    <div className='app-content'>
      <h3>Personal Details</h3>
      <GeneralInfo />
      <h3>Professional experience</h3>
      <Experience />
      <h3>Education</h3>
      <Education />
    </div>
  )
}

export default App;