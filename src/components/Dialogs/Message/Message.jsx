import React from "react";
import classes from "../Dialogs.module.css";

const Message = (props) => {
	return (<div className={classes.message}>{props.message.text}</div>)
}

export default Message