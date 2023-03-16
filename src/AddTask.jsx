import React, { useRef } from "react";

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
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => ref.current.focus()}>Add Task</button>
    </form>
  );
};

export default AddTask;
