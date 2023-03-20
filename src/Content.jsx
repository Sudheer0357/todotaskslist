import React from "react";
import TaskList from "./TaskList";

const Content = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <>
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No Tasks</p>
      )}
    </>
  );
};

export default Content;
