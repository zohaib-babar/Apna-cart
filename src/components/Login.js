import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]     = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ Demo credentials (baad me API/jwt laga lena)
    if (username === "admin" && password === "1234") {
      setError("");
      onLogin(); // App ko bol do: login ho gaya
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5" style={{maxWidth: 500}}>
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="admin"
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="1234"
          />
        </div>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">Sign in</button>
      </form>
    </div>
  );
}
