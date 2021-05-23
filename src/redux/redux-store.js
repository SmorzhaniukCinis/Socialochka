import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Priofile-reducer";
import dialogsReducer from "./Dialods-reducer";
import friendsReducer from "./Friends-reducer";
import usersReducer from "./Users-Reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store