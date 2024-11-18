// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// function CollegeLoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Mock Authentication (Replace with real API calls)
//     if (email === "student@college.com" && password === "college123") {
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials! Try student@college.com with password.");
//     }
//   };

//   return (
//     <div className="dynamic-background">
//       <div className="login-container">
//         <div className="header">
//           <div className="college-logo">🎓</div>
//           <h1>College Tech Portal</h1>
//         </div>
//         <form className="login-form" onSubmit={handleLogin}>
//           <h2>Student Login</h2>
//           <div className="input-container">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your college email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CollegeLoginPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function CollegeLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock Authentication (Replace with real API calls)
    if (email === "student@college.com" && password === "college123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try student@college.com with password.");
    }
  };

  return (
    <div className="dynamic-background">
      <div className="login-container">
        <div className="header">
          <div className="college-logo">🎓</div>
          <h1>College Tech Portal</h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Student Login</h2>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your college email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CollegeLoginPage;
