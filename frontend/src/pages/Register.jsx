import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const data = await registerUser({
        name,
        email,
        password,
      });

      console.log(data);

      alert(data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("MESSAGE:", error.message);

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
        <h2>Create Account</h2>

        <br />

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

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
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;