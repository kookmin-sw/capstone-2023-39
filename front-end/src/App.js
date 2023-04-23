import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
