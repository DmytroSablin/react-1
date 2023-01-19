import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.state.postsData
		.map(post => <Post id={post.id} message={post.message} Like={props.Like} likes_num={post.likes_num}/>)
	let newPost = React.createRef()

	let changePost = () => {
		props.changepost(newPost.current.value)
	}
	let addPost = () => {
		if (newPost.current.value) {
			props.addpost()
			newPost.current.value = null;
		}
	}

	return (<div className={classes.content}>
		<div className={classes.myname}>My Posts</div>
		<div>
			<textarea onChange={changePost} value={props.textareav} ref={newPost}></textarea>
			<button onClick={addPost}>Add post</button>
		</div>
		<div className={classes.posts}>{postsElements}</div>
	</div>)
}

export default MyPosts