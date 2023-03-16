import React from "react";

const Content = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} className="task">
            <input
              type="checkbox"
              onChange={() => handleCheck(task.id)}
              checked={task.checked}
            />
            <label
              onDoubleClick={() => handleCheck(task.id)}
              style={task.checked ? { textDecoration: "line-through" } : null}
            >
              {task.taskName}
            </label>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Content;
