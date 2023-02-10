import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialog-reducer"

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
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
		this._callSubscriber() }
}

export default store
