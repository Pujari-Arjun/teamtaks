import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const columns = ['Backlog', 'In Progress', 'Review', 'Done'];

function Board() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(setTasks);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {columns.map(col => (
        <div key={col}>
          <h2>{col}</h2>
          {tasks.filter(t => t.status === col).map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
