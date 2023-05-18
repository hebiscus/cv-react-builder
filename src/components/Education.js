import React from 'react';
import { Component } from 'react';
import '../styles/App.css';

class Education extends Component {
    constructor() {
        super();
        this.state = {
            program: "",
            university: "",
            startDate: "",
            endDate: "",
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
        if (this.state.program === "" || this.state.university === "") {
            return;
        }
        e.preventDefault();
        const inputsArray = [this.state.program, this.state.university, this.state.startDate, this.state.endDate];
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
            ? <div className='education-edit'>
                <form className='general-form'>
                    <input name='program' type='text' placeholder="program/course" defaultValue={this.state.program} onChange={this.onInputChange} required></input>
                    <input name='university' type='text' placeholder="university" defaultValue={this.state.university} onChange={this.onInputChange} required></input>
                    <input name='startDate' type='date' placeholder="start date" defaultValue={this.state.startDate} onChange={this.onInputChange} required></input>
                    <input name='endDate' type='date' placeholder="end date" defaultValue={this.state.endDate} onChange={this.onInputChange} required></input>
                    <button type='submit' onClick={this.handleSubmit}>Submit Section</button>
                </form>
            </div>
            : <div className='education-submitted'>
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

export default Education;