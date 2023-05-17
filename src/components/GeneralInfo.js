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
                <input type='text' placeholder="name"></input>
                <input type='email' placeholder="email"></input>
                <input type='tel' placeholder="phone number"></input>
                <textarea placeholder="summary"></textarea>
            </form>
        </div>
    }
}

export default GeneralInfo;