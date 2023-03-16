import { useState } from "react";
import AddTask from "./AddTask";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const setAndSaveTasks = (taskList) => {
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };

  const addTask = (newTask) => {
    const task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      taskName: newTask,
      checked: false,
    };
    const newList = [...tasks, task];
    setAndSaveTasks(newList);
  };
  const handleCheck = (id) => {
    const newList = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setAndSaveTasks(newList);
  };
  const handleDelete = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  return (
    <div className="App">
      <Header title="Todo Tasks List" />
      <AddTask
        setNewTask={setNewTask}
        newTask={newTask}
        handleSubmit={handleSubmit}
      />
      <Content
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={tasks.length} />
    </div>
  );
}

export default App;
