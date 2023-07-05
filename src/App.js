import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { exportTasksToExcel } from "./utils/excelUtils";
import "./App.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const exportToExcel = () => {
    exportTasksToExcel(tasks);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskList
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
}

export default TaskManager;
