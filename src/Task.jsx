import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Task = ({ task, handleCheck, handleDelete }) => {
  return (
    <li
      key={task.id}
      className="task"
      style={task.checked ? { backgroundColor: "green" } : null}
    >
      <label
        onDoubleClick={() => handleCheck(task.id)}
        style={
          task.checked
            ? { textDecoration: "line-through", color: "white" }
            : null
        }
      >
        {task.taskName}
      </label>
      <input
        className="form-check"
        type="checkbox"
        onChange={() => handleCheck(task.id)}
        checked={task.checked}
      />
      <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  );
};

export default Task;
