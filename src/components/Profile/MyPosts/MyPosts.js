import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {
  let postData = [
    {message:'Hello', likesCount: 1},
    {message:'My first post', likesCount: 2}
  ]
  return (
    <div className={s.wrapper}>
      <div>
        <h3>My Post</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[0].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
