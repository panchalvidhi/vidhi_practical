import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm() {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Creating project:', projectName);
    setProjectName(projectName)
   navigate('/projectlist' , {state:projectName });
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProjectForm;