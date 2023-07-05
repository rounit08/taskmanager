import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, addTask, updateTask, deleteTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleNewTaskChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      addTask({ id: Date.now(), title: newTaskTitle });
      setNewTaskTitle("");
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          placeholder="Enter task title"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
