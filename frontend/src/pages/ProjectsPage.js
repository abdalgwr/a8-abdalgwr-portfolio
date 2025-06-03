import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoProject } from "react-icons/go";


import ProjectList from '../components/ProjectList';


function ProjectsPage({ setProject }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [projects, setProjects] = useState([]);

    // RETRIEVE the entire list of projects
    const loadProjects = async () => {
        const response = await fetch('/crochet');
        const projects = await response.json();
        setProjects(projects);
    } 
    

    // UPDATE a single project
    const onEditProject = async project => {
        setProject(project);
        redirect("/update");
    }


    // DELETE a single project  
    const onDeleteProject = async _id => {
        const response = await fetch(`/crochet/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/crochet');
            const projects = await getResponse.json();
            setProjects(projects);
        } else {
            console.error(`Sorry, could not delete this project. Please try again = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the projects
    useEffect(() => {
        loadProjects();
    }, []);

    // DISPLAY the projects
    return (
        <>
            <h2>Crochet Projects Tracker   <GoProject />
</h2>
            <p>To track crochet projects, use the add icon to track the works. Use the delete and edit icons to get rid of or change a project. </p>
            <ProjectList 
                projects={projects} 
                onEdit={onEditProject} 
                onDelete={onDeleteProject} 
            />
            
        </>
    );
}

export default ProjectsPage;