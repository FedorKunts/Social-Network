import React from "react";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

let Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <Info />
      <MyPosts
        state={props.state}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
