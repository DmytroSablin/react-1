import {rerenderEntireTree} from "../render";

let state = {
	profilePage: {
		postsData: [{id: 1, message: 'hello, how are u?', likes_num: 15}, {id: 2, message: 'lolkek', likes_num: 8}]
	},
	messagesPage: {
		dialogsData: [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}, {id: 4, name: 'Johny'}],
		messagesData: [{id: 1, text: 'Hi!'}, {id: 2, text: 'How are u?'}, {id: 3, text: 'Yo'}],
	},
	navBar: {
		friendsData: [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}]
	}
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 4,
		message: postMessage,
		likes_num: 14
	};
	state.profilePage.postsData.push(newPost);
	rerenderEntireTree(state, addPost)
}
export default state