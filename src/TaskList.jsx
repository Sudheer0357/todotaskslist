import React from "react";
import Task from "./Task";
import "./index.css";

const TaskList = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
