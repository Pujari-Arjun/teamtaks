import React from 'react';

function getBadge(task) {
  const now = new Date();
  const due = new Date(task.dueDate);
  if (task.status === 'Done') return 'On Track';
  if (due < now) return 'Overdue';
  if (due - now < 24 * 60 * 60 * 1000) return 'At Risk';
  return 'On Track';
}

function TaskCard({ task }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '0.5rem', padding: '0.5rem' }}>
      <h4>{task.title}</h4>
      <div>Priority: {task.priority}</div>
      <div>Assignee: {task.assigneeId}</div>
      <div>Due: {new Date(task.dueDate).toLocaleString()}</div>
      <div>Status: <span>{getBadge(task)}</span></div>
    </div>
  );
}

export default TaskCard;
