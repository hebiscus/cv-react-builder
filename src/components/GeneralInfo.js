import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
    
        }
    }


    
    render() {
        return <div>
            <form className='general-form'>
                <input type='text'></input>
                <input type='email'></input>
                <input type='tel'></input>
                <textarea></textarea>
            </form>
        </div>
    }
}

export default GeneralInfo;