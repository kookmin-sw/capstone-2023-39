import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main";
import Tables from "./pages/Tables/tables";
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
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
