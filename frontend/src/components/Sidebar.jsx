import { useNavigate } from "react-router-dom";

function Sidebar() {
const navigate = useNavigate();

return (
<div
style={{
width: "250px",
background: "#0f172a",
color: "white",
padding: "25px",
minHeight: "100vh",
borderRight: "1px solid rgba(255,255,255,0.1)",
}}
>
<h2
style={{
textAlign: "center",
marginBottom: "20px",
}}
>
🚀 PM Tool </h2>

  <hr
    style={{
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  />

  <div
    style={{
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    }}
  >
    <button
      onClick={() => navigate("/dashboard")}
      style={buttonStyle}
    >
      📊 Dashboard
    </button>

    <button
      onClick={() => navigate("/projects")}
      style={buttonStyle}
    >
      📁 Projects
    </button>

    <button
      onClick={() => navigate("/tasks")}
      style={buttonStyle}
    >
      ✅ Tasks
    </button>

    <button
      style={buttonStyle}
    >
      👥 Teams
    </button>
  </div>
</div>

);
}

const buttonStyle = {
background: "transparent",
border: "none",
color: "white",
fontSize: "18px",
textAlign: "left",
cursor: "pointer",
padding: "12px",
borderRadius: "10px",
};

export default Sidebar;
