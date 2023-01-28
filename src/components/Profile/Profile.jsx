import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"


const Profile = (props) => {
	return (<div className={classes.content}>
			<img
				src="./background.jpg"
				alt="nature"/>
			<div>
				ava + disc
			</div>
			<div>
				<MyPosts
					addpost={props.addpost}
					textareav={props.state.newPost}
					changepost={props.changepost}
					state={props.state}
					Like={props.Like}
				/>
			</div>
		</div>)
}

export default Profile