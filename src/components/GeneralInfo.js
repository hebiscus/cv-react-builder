import React from 'react';
import { Component } from 'react';
import '../styles/App.css';
import EditButton from './EditBtn'
import SubmitButton from './SubmitBtn';

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            number: "",
            summary: "",
        };
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value
        })
    }

    
    render() {
        return <div>
            <form className='general-form'>
                <input name='name' type='text' placeholder="name"></input>
                <input name='email' type='email' placeholder="email"></input>
                <input name='number' type='tel' placeholder="phone number"></input>
                <textarea name='summary' placeholder="summary"></textarea>
            </form>
            <div>
                <EditButton />
                <SubmitButton />
            </div>
        </div>
    }
}

export default GeneralInfo;