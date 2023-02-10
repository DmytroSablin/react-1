import React from "react";
import classes from "./Post.model.css"
import { LikeActionCreator } from "../../../../redux/profile-reducer";

const Post = (props) => {
    let likefunk = () => {
        props.dispatch(LikeActionCreator(props.post.id))
    }

    if (props.post.likes_num) {
        return (
            <div>
            <span>
                {props.post.message} ({props.post.likes_num} likes)
                <button className="like_button" onClick={likefunk}>like</button>
            </span>
            </div>
        )
    }
    else {
        return (
            <div>
            <span>
                {props.post.message}
                <button className="like_button" onClick={likefunk}>like</button>
            </span>
            </div>
        )
    }

}

export default Post