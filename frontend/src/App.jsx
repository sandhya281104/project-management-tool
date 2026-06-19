import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            token
              ? <Dashboard />
              : <Navigate to="/" />
          }
        />

          <Route
          path="/tasks"
          element={<Tasks />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;