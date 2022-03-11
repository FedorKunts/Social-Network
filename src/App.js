import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <nav className="nav">
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>
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
