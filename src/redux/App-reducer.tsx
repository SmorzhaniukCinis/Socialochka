import {authUser} from "./Auth-reducer";

let SET_INITIALIZED = 'APP/SET_INITIALIZED'


export type initialStateType = {
    initialized: boolean
}

let initialState:initialStateType = {
    initialized: false
}


const AppReducer = (state = initialState, action:any):initialStateType => {
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

export const initializedSuccess = ():initializedSuccessType => ({type: SET_INITIALIZED})

type initializedSuccessType ={
    type: typeof SET_INITIALIZED
}
export const initializeApp = () =>(dispatch:any) => {
    let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer