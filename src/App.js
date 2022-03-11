import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        Content
      </div>
      <footer className="footer">
        f
      </footer>
    </div>
  );
};

export default App;
