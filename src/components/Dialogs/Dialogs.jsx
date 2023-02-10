import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { AddMessageActionCreator, ChangeMessageActionCreator } from "../../redux/dialog-reducer";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData
		.map(dialog => <DialogItem dialog={dialog}/>)

	let messagesElements = props.state.messagesData
		.map(message => <Message message={message}/>)

	let newMessage = React.createRef()

	let addMessage = () => {
		props.dispatch(AddMessageActionCreator())
		newMessage.current.value = null;
	}

	let changeMessage = () => {
		props.dispatch(ChangeMessageActionCreator(newMessage.current.value))
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
				<input onChange={changeMessage} ref={newMessage} type="text" className={classes.txtarea} placeholder=" Message"></input>
				<button onClick={addMessage} type="submit" className={classes.btn}>send</button>
			</span>
		</div>
	</div>)
}

export default Dialogs