
import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    const [selectedProject, setSelectedProject] = useState('');
    
  
    useEffect(() => {
      const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
      setProjects(storedProjects);
     
    }, []);
  
    useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);
  
   
  
    const handleProjectSubmit = (e) => {
      e.preventDefault();
      if (selectedProject.trim() !== '') {
        setProjects([...projects, selectedProject]);
        setSelectedProject('');
      }
    };
  

  
    return (
      <div>
        <h2>Projects</h2>
        <form onSubmit={handleProjectSubmit}>
          <input
            type="text"
            placeholder="Enter project name"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          />
          <button type="submit">Add Project</button>
        </form>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
  
      
       
      </div>
    );
  
};

export default Projects;
