import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.state.postsData
		.map(post => <Post message={post.message} likes_num={post.likes_num}/>)

	let newPost = React.createRef()

	let addPostik = () => {
		if (newPost.current.value) {
			props.addpost(newPost.current.value)
			newPost.current.value = null;
		}
	}

	return (<div className={classes.content}>
		<div className={classes.myname}>My Posts</div>
		<div>
			<textarea ref={newPost}></textarea>
			<button onClick={addPostik}>Add post</button>
		</div>
		<div className={classes.posts}>{postsElements}</div>
	</div>)
}

export default MyPosts