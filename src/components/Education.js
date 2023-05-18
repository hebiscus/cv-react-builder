import React from 'react';
import { Component } from 'react';
import '../styles/App.css';
import EditButton from './EditBtn'
import SubmitButton from './SubmitBtn';

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
            <div>
                <EditButton />
                <SubmitButton />
            </div>
        </div>
    }
}

export default Education;