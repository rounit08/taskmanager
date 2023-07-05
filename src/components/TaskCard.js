import React, { useState } from "react";

function TaskCard({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const saveTask = () => {
    updateTask(task.id, { title, description });
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <>
          <input type="text" value={title} onChange={handleTitleChange} />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <button onClick={saveTask}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskCard;
