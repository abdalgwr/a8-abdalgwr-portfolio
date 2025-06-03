import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";


// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ProjectList({ projects, onDelete, onEdit }) {
    return (
        <table id="projects">
            <caption>Add and Edit Projects</caption>

            <thead>
                <tr>

                    <th>Name</th>
                    <th>Hours</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link className="add-icon" to="/create"><IoMdAddCircle /></Link></th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, i) => 
                    <Project 
                        project={project} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ProjectList;
