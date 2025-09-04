import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      
      // Save JWT token
      localStorage.setItem("token", res.data.token);

      alert("Login successful ✅");
      onLogin(); // parent ko inform karna (dashboard redirect, etc.)
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <h4 className="mb-3 text-center">Sign In</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <button type="button" className="btn btn-outline-danger w-100">
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        </div>

        <div className="text-center mt-3">
          <button type="button" className="btn btn-outline-primary w-100">
            <i className="bi bi-facebook me-2"></i> Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

