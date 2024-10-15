# Task Management App

## Overview

The Task Management App is a full-stack application that allows users to manage their tasks efficiently. Built using FastAPI for the backend and React for the frontend, this app supports basic task operations through a user-friendly interface.

## Features

- **CRUD Functionality**:
  - **Create**: Add new tasks with a title, description, and status.
  - **Read**: Retrieve and view all tasks in the application.
  - **Update**: Modify the status of tasks (e.g., change from "todo" to "in_progress" or "done").
  - **Delete**: Remove tasks from the list.

- **User Interface**:
  - **TaskList Component**: Displays all tasks in a user-friendly format.
  - **TaskForm Component**: Provides a form for users to input new tasks.
  - **TaskItem Component**: Shows individual task details with options to update or delete the task.

- **Styling**:
  - Basic styling implemented using CSS, with optional use of a framework like Bootstrap for improved aesthetics.

- **State Management**:
  - Utilizes React Hooks for managing application state and handling side effects.

- **Error Handling**:
  - Basic error handling implemented for user inputs and API requests.

- **Client-Side Validation**:
  - Simple form validation to ensure data integrity when creating or updating tasks.

- **Sorting and Filtering**:
  - Basic functionality for sorting or filtering tasks based on status or creation date.

- **Responsive Design**:
  - Application is responsive to ensure usability across different devices.

- **User Notifications**:
  - Notifications for actions like successful task addition or updates.

- **Confirmation Dialogs**:
  - Confirmation box implemented before task deletion to prevent accidental removals.

## Technologies Used

- **Backend**:
  - FastAPI
  - SQLAlchemy

- **Frontend**:
  - React
  - CSS (with optional Bootstrap)

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-management-app
