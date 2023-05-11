import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import Statistics from "./pages/Statistics/statistics";
import Detect from "./pages/Detect/detect";
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
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/detect" element={<Detect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
