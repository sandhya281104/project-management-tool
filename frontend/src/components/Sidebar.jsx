import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🚀 PM Tool
      </h2>

      <hr />

      <div
        style={{
          marginTop: "20px",
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
          style={buttonStyle}
        >
    
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
  fontSize: "16px",
  textAlign: "left",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "8px",
};

export default Sidebar;