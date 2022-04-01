import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {
  let postsElements = props.state.profilePage.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
