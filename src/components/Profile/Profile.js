import React from "react";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

let Profile = (props) => {
  return (
    <div>
      <Info />
      <MyPosts state={props.state.profilePage} />
    </div>
  );
};

export default Profile;
