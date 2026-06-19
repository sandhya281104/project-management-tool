import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const data = await loginUser({
        email,
        password
      });

      localStorage.setItem(
        "token",
        data.token
      );

      alert(data.message);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.message ||
        error.message
      );

    }

  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a"
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          color: "white"
        }}
      >
        <h2>Login</h2>

        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#3b82f6",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;