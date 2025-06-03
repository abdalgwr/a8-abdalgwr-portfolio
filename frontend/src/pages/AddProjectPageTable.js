import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddProjectPageTable = () => {

    const [projectName, setName]       = useState('');
    const [hoursTook, setHours]         = useState('');
    const [dateCreated, setDate] = useState('');
    
    const redirect = useNavigate();

    const addProject = async () => {
        const newProject = { projectName, hoursTook, dateCreated };
        const response = await fetch('/crochet', {
            method: 'post',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            redirect("../crochet");
        } else {
            alert(`Error. Please try adding the project again. Fill all fields of text. ${response.status}`);
        }
    };


    return (
        <>
        <article>
            <h2>Add a project</h2>
            <p>First enter the project name, how long it took to finish, and then the date it was completed. Press Add to confirm to your inputs.</p>
            
            <table id="projects" className="project-table">
                <caption>Which project are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Hours</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">Project name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            value={projectName}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="hours">Hours Taken</label>
                        <input
                            type="number"
                            value={hoursTook}
                            placeholder="Hours"
                            onChange={e => setHours(e.target.value)} 
                            id="hours" />
                    </td>

                    <td><label for="date">Date Created</label>
                        <input
                            type="date"
                            placeholder="Date finished"
                            value={dateCreated}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Confirm</label>
                        <button
                            type="submit"
                            onClick={addProject}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddProjectPageTable;