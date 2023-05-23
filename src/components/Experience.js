import { useState } from 'react';
import '../styles/App.css';

const Experience = () => {
    const initialValues = {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
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
        if (inputValues.position === "" || inputValues.company === "") {
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
        ?   <div className='experience-edit'>
                <form className='general-form'>
                <input name='position' type='text' placeholder="position" value={inputValues.position} onChange={updateInputs} required></input>
                <input name='company' type='text' placeholder="email" value={inputValues.company} onChange={updateInputs} required></input>
                <input name='startDate' type='date' placeholder="start date" value={inputValues.startDate} onChange={updateInputs}required></input>
                <input name='endDate' type='date' placeholder="end date" value={inputValues.endDate} onChange={updateInputs} required></input>
                <textarea name='description' placeholder="description" value={inputValues.description} onChange={updateInputs}></textarea>
                <button type='submit' onClick={handleSubmit}>Submit Section</button>
                </form>
            </div>
        :   <div className='experience-submitted'>
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

export default Experience