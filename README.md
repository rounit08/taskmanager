# Task Manager Documentation

Task Manager is a web application built using React that allows users to manage their tasks effectively. It provides a user-friendly interface to add, update, and delete tasks, as well as the ability to export the task list to an Excel file.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Utils](#utils)

## Features

1. **Add Task**: Users can add new tasks to the task list by entering a task title.
2. **Update/Delete Task**: Users can update or delete existing tasks in the task list.
3. **Export to Excel**: Users can export the entire task list to an Excel file for further analysis or record-keeping.

## Installation

To install and run the Task Manager application locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/rounit08/taskmanager
   ```

2. Navigate to the project directory:
   ```shell
   cd task-manager
   ```

3. Install dependencies:
   ```shell
   npm install
   ```

4. Start the development server:
   ```shell
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

1. **Adding a Task**:
   - Enter a task title in the input field and click the "Add Task" button. The new task will be added to the task list.
   
2. **Updating a Task**:
   - Click the "Edit" button on a task card to enter edit mode.
   - Modify the task title or other details.
   - Click the "Save" button to save the changes.

3. **Deleting a Task**:
   - Click the "Delete" button on a task card to remove the task from the list.

4. **Exporting to Excel**:
   - Click the "Export to Excel" button to download the task list as an Excel file (`task_list.xlsx`).

## Components

The Task Manager application is built using the following React components:

1. **TaskManager**: The main component that holds the entire application. It manages the task list and provides callbacks to add, update, and delete tasks.

2. **TaskList**: Displays the list of tasks and provides an input field and button to add new tasks. It receives the task list and callbacks from the TaskManager component.

3. **TaskCard**: Represents an individual task in the task list. It displays the task title, description, and provides buttons to edit or delete the task.

   Certainly! Let's provide a more detailed explanation of the components used in the Task Manager application:

. **TaskManager**:
   - This is the main component of the application that acts as the container for the entire Task Manager functionality.
   - It manages the state of the task list using the `useState` hook, storing an array of tasks.
   - The `addTask`, `updateTask`, and `deleteTask` functions are passed down to child components as callbacks to handle adding, updating, and deleting tasks in the task list.
   - The `exportToExcel` function triggers the export functionality to download the task list as an Excel file.
   - Renders the TaskList component.

. **TaskList**:
   - Displays the list of tasks and provides the functionality to add new tasks.
   - Receives the `tasks` array as a prop from the TaskManager component.
   - Renders an input field and a button to add new tasks.
   - When the "Add Task" button is clicked, it invokes the `addTask` callback function from TaskManager, passing the new task as an argument.
   - Maps over the tasks array and renders a TaskCard component for each task in the list.

. **TaskCard**:
   - Represents an individual task in the task list.
   - Receives the `task` object, `updateTask`, and `deleteTask` callback functions as props from the TaskList component.
   - Displays the task title, description, and buttons for editing or deleting the task.
   - When the "Edit" button is clicked, it enters the edit mode, allowing users to modify the task details and save the changes.
   - When the "Save" button is clicked, it invokes the `updateTask` callback function from TaskList, passing the task ID and the updated task details as arguments.
   - When the "Delete" button is clicked, it invokes the `deleteTask` callback function from TaskList, passing the task ID as an argument.


## Utils

The `excelUtils.js` file in the `src/utils` directory provides utility functions related to exporting tasks to Excel:

- **exportTasksToExcel(tasks)**: Converts the task list to an Excel file and prompts the user to download it.
- **saveAsExcelFile(buffer, fileName)**: Saves the Excel file by creating a download link and triggering a click event.

## Conclusion

The Task Manager application offers a simple yet powerful task management solution. With its intuitive interface and essential features, users can efficiently organize and track their tasks. The ability to export the task list to Excel adds an extra level of convenience for further analysis and record-keeping.
