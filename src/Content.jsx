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
        <h1 style={{ textAlign: "center", marginTop: "25px" }}>No Tasks</h1>
      )}
    </>
  );
};

export default Content;
