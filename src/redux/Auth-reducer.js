import {authAPI} from "../api/api";

let SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth : false
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, id: action.AuthData.id, login: action.AuthData.login, email: action.AuthData.email, isAuth: true}
        default:
            return state
    }
}

export const setUserAuthData = (AuthData) => ({type: 'SET_USER_AUTH_DATA', AuthData})

export const authUser = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(responce => {
                if(responce.data.resultCode===0){
                    dispatch(setUserAuthData(responce.data.data))}
                }
            )
    }
}


export default AuthReducer