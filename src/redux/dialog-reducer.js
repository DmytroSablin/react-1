const ADDMESSAGE = "ADD-MESSAGE"
const ONCHANGEMESSAGE = "ON-CHANGE-MESSAGE"

let initialState = {
    dialogsData: [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}, {id: 4, name: 'Johny'}],
    messagesData: [{id: 1, text: 'Hi!'}, {id: 2, text: 'How are u?'}, {id: 3, text: 'Yo'}],
    newMessage: ""
}

const dialogsReducer = (state=initialState, action) => {
    if (action.type === ADDMESSAGE) {
        if (state.newMessage) {
            let message = {
                id:3,
                text: state.newMessage,
            }
            state.messagesData.push(message)
            state.newMessage = ""
        }
    } else if (action.type === ONCHANGEMESSAGE) {
        state.newMessage = action.msgtxtx
    }
    return state
}

export default dialogsReducer
export const AddMessageActionCreator = () => {return {type: ADDMESSAGE}}
export const ChangeMessageActionCreator = (text) => {return {type: ONCHANGEMESSAGE, msgtxtx: text}}
