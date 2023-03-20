import React, { useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const AddTask = ({ setNewTask, newTask, handleSubmit }) => {
  const ref = useRef(null);
  return (
    <form className="input-div" onSubmit={handleSubmit}>
      <input
        ref={ref}
        autoFocus
        required
        type="text"
        value={newTask}
        placeholder="Add Task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "mediumblue" }}
        onClick={() => ref.current.focus()}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
