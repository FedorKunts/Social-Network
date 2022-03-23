import React from "react";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

let Profile = () => {
  return (
    <div >
      <Info />
      <MyPosts />
    </div>
  );
};

export default Profile;
