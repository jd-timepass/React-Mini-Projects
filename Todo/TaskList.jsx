import React from "react";

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}>
          {task.text}
          <button onClick={() => onToggle(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;