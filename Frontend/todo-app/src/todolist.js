import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'; 

const api_url = "https://to-do-backend-r5m831og1-bhavneet-singhs-projects.vercel.app/?vercelToolbarCode=UJncWfzAzfig2JW";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(""); // Reset error before fetching
    try {
      const response = await axios.get(`${api_url}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      setError("Error fetching tasks");
      console.error("Error fetching tasks", error);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async () => {
    if (!newTask.title || !newTask.description) {
      alert("Title and Description are required.");
      return;
    }

    setLoading(true);
    setError(""); // Reset error before creating
    try {
      await axios.post(`${api_url}/api/tasks`, newTask);
      setSuccessMessage("Task added successfully!");
      fetchTasks();
      setNewTask({ title: "", description: "" });
    } catch (error) {
      setError("Error creating task");
      console.error("Error creating task", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setLoading(true);
      setError(""); // Reset error before deletion
      try {
        await axios.delete(`${api_url}/api/tasks/${taskId}`);
        fetchTasks();
      } catch (error) {
        setError("Error deleting task");
        console.error("Error deleting task", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    setLoading(true);
    setError(""); // Reset error before updating
    try {
      await axios.put(`${api_url}/api/tasks/${taskId}`, { status });
      fetchTasks();
    } catch (error) {
      setError("Error updating task status");
      console.error("Error updating task status", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-custom">
      <div className="max-w-xl w-full bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Todo List</h1>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="flex-1 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={createTask}
            className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li key={task.id} className="p-4 bg-gray-300 rounded-md shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-gray-500">Status: {task.status}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => updateTaskStatus(task.id, "in_progress")}
                  className="px-3 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition"
                >
                  Mark as In Progress
                </button>
                <button
                  onClick={() => updateTaskStatus(task.id, "done")}
                  className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                >
                  Mark as Done
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
