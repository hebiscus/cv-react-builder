import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class Education extends Component {
    constructor() {
        super();
        this.state = {
    
        }
    }

    render() {
        return <div>
            <form className='education-from'>
                <input type='text' placeholder="course/program"></input>
                <input type='text' placeholder="university"></input>
                <input type='date' placeholder="start date"></input>
                <input type='date' placeholder="end date"></input>
                <textarea placeholder="description"></textarea>
            </form>
        </div>
    }
}

export default Education;