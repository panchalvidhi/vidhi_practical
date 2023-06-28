import React, { useState } from 'react';

function ProjectSubmission() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [submittedProjects, setSubmittedProjects] = useState([]);

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleProjectCategoryChange = (event) => {
    setProjectCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (projectName.trim() === '' || projectDescription.trim() === '' || projectCategory.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const newProject = {
      name: projectName,
      description: projectDescription,
      category: projectCategory,
    };

    setSubmittedProjects([...submittedProjects, newProject]);
    setProjectName('');
    setProjectDescription('');
    setProjectCategory('');
  };

  return (
    <div>
      <h1>Project Submission</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" value={projectName} onChange={handleProjectNameChange} required />
<br/>
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea id="projectDescription" value={projectDescription} onChange={handleProjectDescriptionChange} required />
<br/>
        <label htmlFor="projectCategory">Project Category:</label>
        <input type="text" id="projectCategory" value={projectCategory} onChange={handleProjectCategoryChange} required />
<br/>
        <button type="submit" style={{width:"80px"  }}>Submit</button>
      </form>

      <h2>Submitted Projects</h2>
      {submittedProjects.length > 0 ? (
        <ul>
          {submittedProjects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Category: {project.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects submitted yet.</p>
      )}
    </div>
  );
}

export default ProjectSubmission;
