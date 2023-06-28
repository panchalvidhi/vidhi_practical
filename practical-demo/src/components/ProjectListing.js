import React from 'react';
import { useLocation, useNavigate } from 'react-router';

function ProjectListing() {

const navigate =useNavigate()

  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
  ];
const location = useLocation();
  return (
    <div>


      <h2>Projects</h2>
      <ul>
        {projects?.map((project) => (
          <li key={project.id}>{location.state}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectListing;
