import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {

  let postsElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    
    let text = newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value = '';
  };


  return (
    <div className={s.wrapper}>
      <div>
        <h3>My Post</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick= {addPost} >Add post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
