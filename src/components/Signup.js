import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend ko request bhej rahe hain
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message); // "User registered successfully!"
      console.log("User saved in DB:", res.data);

      // Form clear
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h4 className="mb-3 text-center">Sign Up</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", {
//         name,
//         email,
//         password,
//       });
//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="card shadow p-4">
//       <h4 className="mb-3 text-center">Signup</h4>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="btn btn-success w-100">Signup</button>
//       </form>
//     </div>
//   );
// }
