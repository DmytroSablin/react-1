let store = {
	_state: {
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
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
	},
	addPost() {
		let newPost = {
			id: this._state.profilePage.postsData[0].id + 1,
			message: this._state.profilePage.newPost,
			likes_num: null
		};
		this._state.profilePage.postsData.unshift(newPost);
		this._state.profilePage.newPost = ""
		this._callSubscriber()
	},
	addMessage() {
		let message = {
			id:3,
			text: this._state.messagesPage.newMessage,
		}
		this._state.messagesPage.messagesData.push(message)
		this._state.messagesPage.newMessage = ""
		this._callSubscriber()
	},
	onChangeMessage(msgtxtx) {
		this._state.messagesPage.newMessage = msgtxtx
		this._callSubscriber()
	},
	onChangePost(posttxt) {
		this._state.profilePage.newPost = posttxt
		this._callSubscriber()
	},
	Like(id) {
		let indx = this._state.profilePage.postsData.map(pst => pst.id).indexOf(id)
		this._state.profilePage.postsData[indx].likes_num += 1
		this._callSubscriber()
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {

	}
}

export default store
