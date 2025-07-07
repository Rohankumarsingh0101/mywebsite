import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        setIsLoggedIn(true);
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage("Logged out.");
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div className="form-side">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign In</button>
            <p>{message}</p>
          </form>
        </div>
      ) : (
        <div>
          <h1>You are logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
          <p>{message}</p>
        </div>
      )}

      <div className="info-side">
        <h1>RS Project</h1>
      </div>
    </div>
  );
}

export default App;