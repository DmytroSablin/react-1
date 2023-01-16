import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.myname}>My Posts</div>
            <Post message="hello, how are u?" likes_num="15"/>
        </div>
    )
}

export default MyPosts