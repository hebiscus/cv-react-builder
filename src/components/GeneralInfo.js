import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

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

    handleSubmit(e) {
        if (this.state.name === "" || this.state.email === "" || this.state.number === "") {
            return;
        }
        e.preventDefault();
        const summary = this.state.summary === "" ? "I enjoy carrots" : this.state.summary;
        const inputsArray = [this.state.name, this.state.email, this.state.number, summary];
        if (this.state.savedInputs.length === 0) {
            this.setState({
                submitStatus: "submitted",
                savedInputs: this.state.savedInputs.concat(inputsArray)
            });
            return
        } 
        this.setState({
            submitStatus: "submitted",
            savedInputs: this.state.savedInputs.map((input, index) => inputsArray[index])
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
                <input name='name' type='text' placeholder="name" value={this.state.name} onChange={this.onInputChange} required></input>
                <input name='email' type='email' placeholder="email" value={this.state.email} onChange={this.onInputChange} required></input>
                <input name='number' type='tel' placeholder="phone number" value={this.state.number} onChange={this.onInputChange} required></input>
                <textarea name='summary' placeholder="summary" onChange={this.onInputChange} defaultValue={this.state.summary || "I enjoy carrots"}></textarea>
                <button type='submit' onClick={this.handleSubmit}>Submit Section</button>
                </form>
            </div>
            : <div className='general-submitted'>
                {sectionInputs.map(input => {
                    return <div>
                        {input}
                    </div>
                })}
                <button onClick={this.handleEdit}>Edit</button>
            </div> 
            }
        </div>
    }
}

export default GeneralInfo;