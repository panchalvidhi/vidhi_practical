
import React, { useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    useEffect(() => {
      
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
              setTasks(storedTasks);
      }, []);
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

      
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && timeSpent.trim() !== '') {
          setTasks([...tasks, { taskName, timeSpent }]);
          setTaskName('');
          setTimeSpent('');
        }
      };
      return (
        <div>
          
    
          <h2>Tasks</h2>
          <form onSubmit={handleTaskSubmit}>
            <input
              type="text"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter time spent"
              value={timeSpent}
              onChange={(e) => setTimeSpent(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.taskName} - {task.timeSpent}
              </li>
            ))}
          </ul>
        </div>
      );
    
};

export default Tasks;
