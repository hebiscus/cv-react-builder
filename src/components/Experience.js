import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
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
        if (this.state.position === "" || this.state.company === "") {
            return;
        }
        e.preventDefault();
        const description = this.state.description === "" ? "professional dumbass" : this.state.description;
        const inputsArray = [this.state.position, this.state.company, this.state.startDate, this.state.endDate, description];
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
            ? <div className='experience-edit'>
                <form className='general-form'>
                <input name='position' type='text' placeholder="position" value={this.state.position} onChange={this.onInputChange} required></input>
                <input name='company' type='text' placeholder="email" value={this.state.company} onChange={this.onInputChange} required></input>
                <input name='startDate' type='date' placeholder="start date" value={this.state.startDate} onChange={this.onInputChange} required></input>
                <input name='endDate' type='date' placeholder="end date" value={this.state.endDate} onChange={this.onInputChange} required></input>
                <textarea name='description' placeholder="description" onChange={this.onInputChange} defaultValue={this.state.summary || "professional dumbass"}></textarea>
                <button type='submit' onClick={this.handleSubmit}>Submit Section</button>
                </form>
            </div>
            : <div className='experience-submitted'>
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

export default Experience