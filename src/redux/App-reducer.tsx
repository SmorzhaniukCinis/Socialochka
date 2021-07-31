import {authUser} from "./Auth-reducer";
import {Dispatch} from "redux";

let SET_INITIALIZED = 'APP/SET_INITIALIZED'


export type initialStateType = {
    initialized: boolean
}

let initialState:initialStateType = {
    initialized: false
}


const AppReducer = (state = initialState, action:ActionType):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type ActionType = initializedSuccessType

export const initializedSuccess = ():initializedSuccessType => ({type: SET_INITIALIZED})

type initializedSuccessType ={
    type: typeof SET_INITIALIZED
}
export const initializeApp = () =>(dispatch:Dispatch<ActionType>) => {
    // @ts-ignore
    let promise = dispatch(authUser())
    // @ts-ignore
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer