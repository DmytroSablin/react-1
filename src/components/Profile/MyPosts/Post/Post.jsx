import React from "react";
import classes from "./Post.model.css"

const Post = (props) => {
    let likefunk = () => {
        props.Like(props.id)
    }

    if (props.likes_num) {
        return (
            <div>
            <span>
                {props.message} ({props.likes_num} likes)
                <button onClick={likefunk}>like</button>
            </span>
            </div>
        )
    }
    else {
        return (
            <div>
            <span>
                {props.message}
                <button onClick={likefunk}>like</button>
            </span>
            </div>
        )
    }

}

export default Post