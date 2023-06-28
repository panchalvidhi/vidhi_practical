
import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState('');
    
  
    useEffect(() => {
      const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
      setProjects(storedProjects);
     
    }, []);
  
    useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);
  
    const selectProject1 = (project) => {
        setCurrentProject(project);
      };
  
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
            <li key={index} onClick={() => selectProject1(project[index])}>{project}</li>
          ))}
        </ul>
  
      
        {currentProject && <Tasks project={currentProject} />}
      </div>
    );
  
};

export default Projects;
