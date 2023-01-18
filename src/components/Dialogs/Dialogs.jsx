import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

	let messagesElements = props.state.messagesData
		.map(message => <Message text={message.text}/>)

	let newMessage = React.createRef()

	let alertmsg = () => {
		alert(newMessage.current.value)
	}

	return (<div className={classes.dialogs}>
		<div className={classes.dialogsItems}>
			{dialogsElements}
		</div>
		<div className={classes.messages}>
			{messagesElements}
		</div>
		<div>
			<span className={classes.sendmsg}>
				<input ref={newMessage} type="text" className={classes.txtarea} placeholder=" Message"></input>
				<button onClick={alertmsg} type="submit" className={classes.btn}>send</button>
			</span>
		</div>
	</div>)
}

export default Dialogs