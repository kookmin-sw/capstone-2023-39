import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import Statistics from "./pages/Statistics/statistics";
import Detect from "./pages/Detect/detect";
import Home from "./pages/Home/home";
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
          <Route path="/main" element={<Main />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
