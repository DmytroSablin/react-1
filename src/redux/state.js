import {rerenderEntireTree} from "../render";

let state = {
	profilePage: {
		postsData: [{id: 1, message: 'hello, how are u?', likes_num: 15}, {id: 0, message: 'lolkek', likes_num: 8}],
		newPost: "",
	},
	messagesPage: {
		dialogsData: [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}, {id: 4, name: 'Johny'}],
		messagesData: [{id: 1, text: 'Hi!'}, {id: 2, text: 'How are u?'}, {id: 3, text: 'Yo'}],
		newMessage: ""
	},
	navBar: {
		friendsData: [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}]
	},
	text: [{lol:'bam', chen:'kun'}, {lol:'kek', chen:'cheburek'}]
}
window.state = state.profilePage.postsData
export let addPost = () => {
	let newPost = {
		id: state.profilePage.postsData[0].id + 1,
		message: state.profilePage.newPost,
		likes_num: 14
	};
	state.profilePage.postsData.unshift(newPost);
	state.profilePage.newPost = ""
	rerenderEntireTree(allProps)
}

export let addMessage = () => {
	let message = {
		id:3,
		text: state.messagesPage.newMessage,
	}
	state.messagesPage.messagesData.push(message)
	rerenderEntireTree(allProps)
}

export let onChangeMessage = (msgtxtx) => {
	state.messagesPage.newMessage = msgtxtx
	console.log(msgtxtx)
	rerenderEntireTree(allProps)
}

export let onChangePost = (posttxt) => {
	state.profilePage.newPost = posttxt
	console.log(state.profilePage.postsData[0].id)
	rerenderEntireTree(allProps)
}
export let Like = (id) => {

	let indx = state.profilePage.postsData.map(pst => pst.id).indexOf(id)
	state.profilePage.postsData[indx].likes_num += 1
	rerenderEntireTree(allProps)
}
export let allProps = {
	state: state,
	addPost: addPost,
	onChangePost: onChangePost,
	onChangeMessage: onChangeMessage,
	addMessage: addMessage,
	Like: Like,
}