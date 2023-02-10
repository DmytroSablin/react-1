const ADDPOST = "ADD-POST" 
const ONCHANGEPOST = "ON-CHANGE-POST"
const LIKE = "LIKE"

let initialState = {
    postsData: [{id: 1, message: 'hello, how are u?', likes_num: 15}, {id: 0, message: 'lolkek', likes_num: 8}],
    newPost: "",
}

const profileReducer = (state=initialState, action) => {
    if (action.type === ADDPOST) {
        let newPost = {
            id: state.postsData[0].id + 1,
            message: state.newPost,
            likes_num: null
        };
        state.postsData.unshift(newPost);
        state.newPost = ""
    } else if (action.type === ONCHANGEPOST) {
        state.newPost = action.posttxt
        console.log(action.posttxt)
    } else if (action.type === LIKE) {
        let indx = state.postsData.map(pst => pst.id).indexOf(action.id)
		state.postsData[indx].likes_num += 1
    }
    return state
}

export default profileReducer

export const AddPostActionCreator = () => {return {type: ADDPOST}}
export const ChangePostActionCreator = (text) => {return {type: ONCHANGEPOST, posttxt: text}}
export const LikeActionCreator = (id) => {return {type: LIKE, id: id}}