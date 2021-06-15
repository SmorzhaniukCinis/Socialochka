import {authUser} from "./Auth-reducer";

let SET_INITIALIZED = 'APP/SET_INITIALIZED'

let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () =>(dispatch) => {
    let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer