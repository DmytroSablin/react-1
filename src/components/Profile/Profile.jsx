import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"

const Profile = (props) => {
	return (<div className={classes.content}>
			<img
				src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
				alt="nature"/>
			<div>
				ava + disc
			</div>
			<div>
				<MyPosts pdata={props.pdata}/>
			</div>
		</div>)
}

export default Profile