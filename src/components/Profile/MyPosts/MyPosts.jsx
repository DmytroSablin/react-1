import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { AddPostActionCreator, ChangePostActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {

	let postsElements = props.state.postsData
		.map(post => <Post dispatch={props.dispatch} post={post}/>)
	let newPost = React.createRef()

	let changePost = () => {
		props.dispatch(ChangePostActionCreator(newPost.current.value))
	}
	let addPost = () => {
		if (newPost.current.value) {
			props.dispatch(AddPostActionCreator())
			newPost.current.value = null;
		}
	}

	return (<div className={classes.content}>
		<div className={classes.myname}>My Posts</div>
		<div>
			<textarea className={classes.txtinputarea} placeholder="New post" onChange={changePost} value={props.state.newPost} ref={newPost}></textarea>
			<button className={classes.postbutton} onClick={addPost}>Add post</button>
		</div>
		<div className={classes.posts}>{postsElements}</div>
	</div>)
}

export default MyPosts