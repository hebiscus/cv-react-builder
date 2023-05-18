import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class SubmitButton extends Component {
    constructor() {
        super();
        this.state = {
    
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {

    }

    
    render() {
        return <button onClick={() => this.handleOnClick()}>Submit Section</button>
    }
}

export default SubmitButton;