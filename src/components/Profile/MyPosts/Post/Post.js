import React from "react";
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div>
            {props.message}
            
        </div>
    )
}

export default Post;