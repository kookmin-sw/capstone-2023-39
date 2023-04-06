import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import KibanaDashboard from "./pages/Dashboard/KibanaDashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
      <div>
        <KibanaDashboard />
      </div>
    </div>
  );
}

export default App;
