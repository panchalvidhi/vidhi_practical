import React from 'react';

function TaskListing() {
  const tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
  ];

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskListing;
