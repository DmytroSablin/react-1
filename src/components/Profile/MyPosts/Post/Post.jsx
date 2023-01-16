import React from "react";
import classes from "./Post.model.css"

const Post = (props) => {
    return (
        <div>
            <span>
                {props.message} ({props.likes_num} likes)
                <button>like</button>
            </span>
        </div>
    )
}

export default Post