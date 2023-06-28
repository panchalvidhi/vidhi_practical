import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link  } from 'react-router-dom';
import ProjectListing from './components/ProjectListing';
import TaskListing from './components/TaskListing';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import Projects from './components/Projects';
import Tasks from './components/Tasks';

function App() {
  return (
    <Router>
       
    <nav>
           <ul>
             <li>
               <Link to="/">Projects</Link>
             </li>
             <li>
               <Link to="/task">Tasks</Link>
             </li>
          </ul>
         </nav>
      <Routes>
        
        <Route exact path="/projectlist" element={<ProjectListing/>} />
        <Route exact path="/" element={<Projects/>} />
        <Route exact path="/task" element={<Tasks/>} />

        <Route exact path="/tasks" element={<TaskListing/>} />
        <Route exact path="/projects/add" element={<ProjectForm/>} />
        <Route exact path="/tasks/add" element={<TaskForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

