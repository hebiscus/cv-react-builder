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
            submitStatus: "edit",
            savedInputs: [],
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onInputChange(event) {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value
        });
    }

    handleSubmit() {
        const inputsArray = [this.state.name, this.state.email, this.state.number, this.state.summary];
        this.setState({
            submitStatus: "submitted",
            savedInputs: this.state.savedInputs.concat(inputsArray)
        });
    }

    handleEdit() {
        this.setState({submitStatus: "edit"});
    }
    
    render() {
        const editStatus = this.state.submitStatus === "edit";
        const sectionInputs = this.state.savedInputs;
        return <div>
            {editStatus 
            ? <div className='general-edit'>
                <form className='general-form'>
                <input name='name' type='text' placeholder="name" onChange={this.onInputChange}></input>
                <input name='email' type='email' placeholder="email" onChange={this.onInputChange}></input>
                <input name='number' type='tel' placeholder="phone number" onChange={this.onInputChange}></input>
                <textarea name='summary' placeholder="summary" onChange={this.onInputChange}></textarea>
                </form>
                <button onClick={this.handleSubmit}>Submit Section</button>
            </div>
            : <div className='general-submitted'>
                {sectionInputs.map(input => {
                    return <div>
                        {input}
                    </div>
                })}
                <button onClick={this.handleEdit}>Edit</button>
            </div> }
            
        </div>
    }
}

export default GeneralInfo;