import {authUser} from "./Auth-reducer";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";

export type initialStateType = {
    initialized: boolean
}

let initialState:initialStateType = {
    initialized: false
}


const AppReducer = (state = initialState, action:ActionType):initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type ActionType = InferActionsTypes<typeof AppActions>

export const AppActions = {
    initializedSuccess: () => ({type: "SET_INITIALIZED"}as const)
}

export const initializeApp = () =>(dispatch:Dispatch) => {
    // @ts-ignore
    let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(AppActions.initializedSuccess())
    })
}


export default AppReducer