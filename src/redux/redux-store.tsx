import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Priofile-reducer";
import dialogsReducer from "./Dialods-reducer";
import friendsReducer from "./Friends-reducer";
import usersReducer from "./Users-Reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleWare from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./App-reducer";
import chatReducer from "./Chat-reducer";


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    InitialApp: AppReducer,
    chatPage: chatReducer
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>


type PropertiesType<T> = T extends {[key : string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key : string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// @ts-ignore
window.store = store

export default store