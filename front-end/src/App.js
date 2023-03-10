import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/admin";
import Visualization from "./pages/Visualization/visualization";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import NewflowAnalysis from "./pages/NetflowAnalysis/netflowAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/newflowAnalysis" element={<NewflowAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
