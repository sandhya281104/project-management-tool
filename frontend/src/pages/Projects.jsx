import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../services/projectService";


function Projects() {

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
  }
}, []);


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await createProject({
        name,
        description,
      });

      alert(data.message);

      setName("");
      setDescription("");

      loadProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const data = await deleteProject(id);

      alert(data.message);

      loadProjects();
    } catch (error) {
      console.log(error);
    }
  };


 const editHandler = async (project) => {
  const newName = prompt(
    "Enter New Project Name",
    project.name
  );

  if (!newName) return;

  try {
    const data = await updateProject(
      project._id,
      {
        name: newName,
        description: project.description,
      }
    );

    alert(data.message);

    loadProjects();

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
          <h1>📁 Projects</h1>

          <form
            onSubmit={submitHandler}
            style={{
              marginTop: "30px",
              maxWidth: "500px",
            }}
          >
            <input
              type="text"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
              }}
            />

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                height: "120px",
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
              Create Project
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
            {projects.map((project) => (
              <div
                key={project._id}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  padding: "20px",
                  borderRadius: "15px",
                  width: "280px",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <button
                  onClick={() => editHandler(project)}
                  style={{
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteHandler(project._id)
                  }
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;