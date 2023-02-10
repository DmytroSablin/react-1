import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (<div className={classes.dialog}>
		<NavLink to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink>
	</div>)
}

export default DialogItem