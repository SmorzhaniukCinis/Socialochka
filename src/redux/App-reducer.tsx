import {authUser} from "./Auth-reducer";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";

export type initialStateType = {
    initialized: boolean
    isPopup: boolean
}

let initialState:initialStateType = {
    initialized: false,
    isPopup: true
}


const AppReducer = (state = initialState, action:ActionType):initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        case "SET_POPUP_MENU":
            return {
                ...state,
                isPopup: action.isPopup
            }
        default:
            return state
    }
}

type ActionType = InferActionsTypes<typeof AppActions>

export const AppActions = {
    initializedSuccess: () => ({type: "SET_INITIALIZED"}as const),
    setPopupMenu: (isPopup:boolean) => ({type: "SET_POPUP_MENU", isPopup}as const)
}

export const initializeApp = () =>(dispatch:Dispatch) => {
    // @ts-ignore
    let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(AppActions.initializedSuccess())
    })
}


export default AppReducer