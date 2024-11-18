import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login";
import Dashboard from "./component/Dashbord";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
