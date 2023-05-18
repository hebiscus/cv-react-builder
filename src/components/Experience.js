import React from 'react';
import { Component } from 'react';
import '../styles/App.css';
import EditButton from './EditBtn'
import SubmitButton from './SubmitBtn';

class Experience extends Component {
    render() {
        return <div>
            <form className='experience-form'>
                <input type='text' placeholder="position"></input>
                <input type='text' placeholder="company"></input>
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

export default Experience