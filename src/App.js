import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Dialogs from "./components/Messages/Dialogs";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Setrtings/Settings";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/messages" element={<Dialogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
