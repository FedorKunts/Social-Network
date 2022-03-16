import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;


