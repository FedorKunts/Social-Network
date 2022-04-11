import React from "react";


let Post = (props) => {
  return (
    <div>
      <div>{props.message}</div>
      <div>Like{props.likesCount}</div>
    </div>
  );
};

export default Post;
