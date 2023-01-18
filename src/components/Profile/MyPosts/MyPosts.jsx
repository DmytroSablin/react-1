import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [{id: 1, message: 'hello, how are u?', likes_num: 15}, {id: 2, message: 'lolkek', likes_num: 8}]

    let postsElements = postsData
        .map(post => <Post message={post.message} likes_num={post.likes_num}/>)

    return (<div className={classes.content}>
        <div className={classes.myname}>My Posts</div>
        <div className={classes.posts}>{postsElements}</div>
    </div>)
}

export default MyPosts