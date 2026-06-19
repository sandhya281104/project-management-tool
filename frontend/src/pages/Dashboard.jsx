import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import { useEffect, useState } from "react";
import { getProjectCount } from "../services/projectService";
import {
  getTaskStats
} from "../services/taskService";


function Dashboard() {

useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);


const [totalProjects, setTotalProjects] =
  useState(0);

useEffect(() => {
  loadCount();
}, []);

const loadCount = async () => {
  try {
    // Projects
    const projectData =
      await getProjectCount();

    setTotalProjects(
      projectData.totalProjects
    );

    // Tasks
    const taskData =
      await getTaskStats();

    setTotalTasks(
      taskData.totalTasks
    );

    setCompletedTasks(
      taskData.completedTasks
    );

  } catch (error) {
    console.log(error);
  }
};

const [totalTasks, setTotalTasks] =
  useState(0);

const [completedTasks,
  setCompletedTasks] =
  useState(0);

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
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <DashboardHeader />

          {/* Stats Cards */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* Projects */}
           <div
  style={{
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "25px",
    width: "240px",
    height: "160px",
    color: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "0.3s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
              <h3
                style={{
                  color: "#94a3b8",
                }}
              >
                Total Projects
              </h3>

              <h1
                style={{
                  fontSize: "42px",
                  marginTop: "10px",
                }}
              >
                 {totalProjects}
              </h1>
            </div>

            {/* Tasks */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                borderRadius: "20px",
                padding: "25px",
                width: "240px",
                color: "white",
              }}
            >
              <h3
                style={{
                  color: "#94a3b8",
                }}
              >
                Total Tasks
              </h3>

              <h1
                style={{
                  fontSize: "42px",
                  marginTop: "10px",
                }}
              >
                {totalTasks}
              </h1>
            </div>

            {/* Completed */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                borderRadius: "20px",
                padding: "25px",
                width: "240px",
                color: "white",
              }}
            >
              <h3
                style={{
                  color: "#94a3b8",
                }}
              >
                Completed Tasks
              </h3>

              <h1
                style={{
                  fontSize: "42px",
                  marginTop: "10px",
                }}
              >
                {completedTasks}
              </h1>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div
            style={{
              marginTop: "40px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "25px",
              color: "white",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2>Recent Activity</h2>

            <p style={{ color: "#94a3b8" }}>
              ✔ Login UI completed
            </p>

            <p style={{ color: "#94a3b8" }}>
  ✔ Project created successfully
</p>

<p style={{ color: "#94a3b8" }}>
  ✔ Task status updated
</p>

<p style={{ color: "#94a3b8" }}>
  ✔ Dashboard analytics connected
</p>

<p style={{ color: "#94a3b8" }}>
  ✔ MongoDB synchronized
</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;