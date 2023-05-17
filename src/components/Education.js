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
                <input type='text'></input>
                <input type='text'></input>
                <input type='date'></input>
                <input type='date'></input>
                <textarea></textarea>
            </form>
        </div>
    }
}

export default Education;