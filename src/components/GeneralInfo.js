import React, { useState } from 'react';
import '../styles/App.css';

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
            if (inputValues.name === "" || inputValues.email === "" || inputValues.number === "") {
                return;
            }
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