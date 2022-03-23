import React from "react";
import s from "./Post.module.css";

let Post = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      <div>Like{props.likesCount}</div>
    </div>
  );
};

export default Post;
