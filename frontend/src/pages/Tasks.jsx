import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  createTask,
  getTasks,
   updateTaskStatus,
} from "../services/taskService";


function Tasks() {


useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
  }
}, []);



  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [tasks, setTasks] =
    useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await createTask({
        title,
        description,
      });

      alert(data.message);

      setTitle("");
      setDescription("");

      loadTasks();

    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (
  id,
  status
) => {
  try {

    await updateTaskStatus(
      id,
      status
    );

    loadTasks();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          color: "white",
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1>📝 Tasks</h1>

          <form
            onSubmit={submitHandler}
            style={{
              maxWidth: "500px",
              marginTop: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
              }}
            />

            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              style={{
                width: "100%",
                height: "120px",
                padding: "12px",
                marginBottom: "15px",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Create Task
            </button>
          </form>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            {tasks.map((task) => (
              <div
                key={task._id}
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  padding: "20px",
                  width: "280px",
                  borderRadius: "15px",
                }}
              >
                <h3>{task.title}</h3>

                <p>
                  {task.description}
                </p>

               <select
  value={task.status}
  onChange={(e) =>
    statusHandler(
      task._id,
      e.target.value
    )
  }
  style={{
    padding: "8px",
    borderRadius: "8px",
    marginTop: "10px",
  }}
>
  <option value="Todo">
    Todo
  </option>

  <option value="In Progress">
    In Progress
  </option>

  <option value="Completed">
    Completed
  </option>
</select>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tasks;