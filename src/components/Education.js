import { useState } from 'react';
import '../styles/App.css';

const Education = () =>  {
    const initialValues = {
        program: "",
        university: "",
        startDate: "",
        endDate: "",
    };

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
        if (inputValues.program === "" || inputValues.university === "") {
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
    };

    return ( 
        <div>
        {editStatus 
            ?   <div className='education-edit'>
                    <form className='general-form'>
                        <input name='program' type='text' placeholder="program/course" value={inputValues.program} onChange={updateInputs} required></input>
                        <input name='university' type='text' placeholder="university" value={inputValues.university} onChange={updateInputs} required></input>
                        <input name='startDate' type='date' placeholder="start date" value={inputValues.startDate} onChange={updateInputs} required></input>
                        <input name='endDate' type='date' placeholder="end date" value={inputValues.endDate} onChange={updateInputs} required></input>
                        <button type='submit' onClick={handleSubmit}>Submit Section</button>
                    </form>
                </div>
            :   <div className='education-submitted'>
                    {savedInputs.map(input => {
                        return <div>
                            {input}
                        </div>
                    })}
                    <button onClick={handleEdit}>Edit</button>
                </div> 
        }
        </div>
    );
};

export default Education;