import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f8fafd";
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#f8fafd",
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
