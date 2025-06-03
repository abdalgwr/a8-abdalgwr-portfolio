import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditProjectPageTable = ({ projectToEdit }) => {
 
    const [projectName, setName]       = useState(projectToEdit.projectName);
    const [hoursTook, setHours]         = useState(projectToEdit.hoursTook);
    const [dateCreated, setDate] = useState(projectToEdit.dateCreated.slice(0,10));
    
    const redirect = useNavigate();

    const editProject = async () => {
        const response = await fetch(`/crochet/${projectToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                projectName: projectName, 
                hoursTook: hoursTook, 
                dateCreated: dateCreated
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            redirect("../crochet");
        } else {
            const errMessage = await response.json();
            alert(`Error. Please try editing the project again. ${response.status}. ${errMessage.Error}`);
        }
    }

    return (
        <>
        <article>
            <h2>Edit a Project</h2>
            <p>Change the project details and click Edit to confirm entries.</p>
            <table id="projects">
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
                <td><label for="projectName">Project name</label>
                        <input
                            type="text"
                            placeholder="Name of the project"
                            value={projectName}
                            onChange={e => setName(e.target.value)} 
                            id="projectName" />
                    </td>

                    <td><label for="hoursTook">Hours Taken</label>
                        <input
                            type="number"
                            value={hoursTook}
                            placeholder="Hours taken to complete"
                            onChange={e => setHours(e.target.value)} 
                            id="hoursTook" />
                    </td>

                    <td><label for="dateCreated">Date</label>
                        <input
                            type="date"
                            placeholder="Date finished"
                            value={dateCreated}
                            onChange={e => setDate(e.target.value)} 
                            id="dateCreated" />
                    </td>

                    <td>
                    <label for="submit">Confirm</label>
                        <button
                            type="submit"
                            onClick={editProject}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditProjectPageTable;