function DashboardHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "34px",
            marginBottom: "5px",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Welcome back to your Project Management Tool 🚀
        </p>
      </div>

      <button
        style={{
          background: "#3b82f6",
          color: "white",
          border: "none",
          padding: "12px 22px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        + New Project
      </button>
    </div>
  );
}

export default DashboardHeader;