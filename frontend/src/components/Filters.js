import React from 'react';

function Filters() {
  return (
    <div>
      <label>Assignee: <input type="text" placeholder="Assignee ID" /></label>
      <label>Priority: <select><option>All</option><option>Low</option><option>Medium</option><option>High</option></select></label>
    </div>
  );
}

export default Filters;
