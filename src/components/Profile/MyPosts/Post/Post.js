import React from "react";
import s from './Post.module.css';
import me from '../../../../assets/images/me.JPG';

let Post = (props) => {
  return (
    <div className={s.post}>
      <div><img alt='' src={me}/>{props.message}</div>
      <div>Like {props.likesCount}</div>
    </div>
  );
};

export default Post;
