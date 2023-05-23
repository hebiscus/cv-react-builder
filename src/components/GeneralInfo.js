import React, { useState } from 'react';
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
                <input name='name' type='text' placeholder="name" defaultValue={this.state.name} onChange={this.onInputChange} required></input>
                <input name='email' type='email' placeholder="email" defaultValue={this.state.email} onChange={this.onInputChange} required></input>
                <input name='number' type='tel' placeholder="phone number" defaultValue={this.state.number} onChange={this.onInputChange} required></input>
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

// export default GeneralInfo;

const FunctionalGeneralInfo = () => {
        const initialValues = {
            name: "",
            email: "",
            number: "",
            summary: "",
        }

        const [inputValues, setInputValues] = useState(initialValues)
        const [submitStatus, setSubmitStatus] = useState("edit");
        const [savedInputs, setInputs] = useState([]);
        const editStatus = submitStatus === "edit"

        const updateInputs = (event) => {
            const { name, value } = event.target;

            setInputValues({
                ...inputValues,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            // if (this.state.name === "" || this.state.email === "" || this.state.number === "") {
            //     return;
            // }
            e.preventDefault();
            setInputs([
                ...Object.values(inputValues)
            ]);
            setSubmitStatus("submit")
        };

        const handleEdit = () => {
            setSubmitStatus("edit")
        }

    return (
        <div>
            {editStatus
                ?  <div className='general-edit'>
                    <form className='general-form'>
                    <input name='name' type='text' placeholder="name" value={inputValues.name} onChange={updateInputs} required></input>
                    <input name='email' type='email' placeholder="email" value={inputValues.email} onChange={updateInputs} required></input>
                    <input name='number' type='tel' placeholder="phone number" value={inputValues.number} onChange={updateInputs} required></input>
                    <textarea name='summary' placeholder="summary" value={inputValues.summary} onChange={updateInputs}></textarea>
                    <button type='submit' onClick={handleSubmit}>Submit Section</button>
                    </form>
                </div>
                : <div className='general-submitted'>
                {savedInputs.map(input => {
                    return <div>
                        {input}
                    </div>
                })}
                <button onClick={handleEdit}>Edit</button>
            </div> 
            }   

        </div>
    )
}

export default FunctionalGeneralInfo