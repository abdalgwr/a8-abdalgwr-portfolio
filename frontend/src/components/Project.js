import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function Project({ project, onEdit, onDelete }) {
    return (
        <tr>
            <td>{project.projectName}</td>
            <td>{project.hoursTook}</td>
            <td>{project.dateCreated.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDelete className="add-icon" onClick={() => onDelete(project._id)} /></td>
            <td><FaEdit className="add-icon" onClick={() => onEdit(project)} /></td>
        </tr>
    );
}

export default Project;