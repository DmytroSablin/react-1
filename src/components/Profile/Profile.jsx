import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"

const Profile = (props) => {
	return (<div className={classes.content}>
			<img
				src={require("./background.png")}
				alt="nature"/>
			<div>
				ava + disc
			</div>
			<div>
				<MyPosts
					dispatch={props.dispatch}
					textareav={props.state.newPost}
					changepost={props.changepost}
					state={props.state}
				/>
			</div>
		</div>)
}

export default Profile