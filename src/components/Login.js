// import React, { useState } from "react";

// export default function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError]     = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ⚠️ Demo credentials (baad me API/jwt laga lena)
//     if (username === "admin" && password === "1234") {
//       setError("");
//       onLogin();
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{maxWidth: 500}}>
//       <h3 className="mb-4">Login</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input
//             className="form-control"
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//             placeholder="admin"
//             autoFocus
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             placeholder="1234"
//           />
//         </div>

//         {error && <div className="alert alert-danger py-2">{error}</div>}

//         <button type="submit" className="btn btn-primary w-100">Sign in</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "zohaib" && password === "3388") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <h4 className="mb-3 text-center">Sign In</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>

        {/* 👇 Google continue button */}
        <div className="text-center mt-3">
          <button className="btn btn-outline-danger w-100">
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-outline-primary w-100">
            <i className="bi bi-facebook me-2"></i> Continue with Facebook
          </button>
        </div>

      </div>
    </div>
  );
}
