import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {
  return (
    <div>
      <Post message="Hello" />
      <Post message="My first post" />
    </div>
  );
};

export default MyPosts;
