import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { First, Home, About } from "./File2";

function RouterComp() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
            <BrowserRouter>
            <nav style={{ background: "#1e293b", padding: "15px" }}>
                <Link style={{ color: "white", marginRight: "15px" }} to="/home">Home</Link>
                <Link style={{ color: "white" }} to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<First />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </BrowserRouter>
       </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",  // horizontal center
    alignItems: "center",      // vertical center
    height: "100vh",           // full screen height
  },
  box: {
    textAlign: "center",
  },
};

export default RouterComp;
