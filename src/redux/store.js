import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import navBarReducer from "./navbar-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navBarReducer
    }
)

let store = createStore(reducers)

export default store;