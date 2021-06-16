import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_AUTH_DATA = 'AUTH/SET_USER_AUTH_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth : false
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                id: action.AuthData.id,
                login: action.AuthData.login,
                email: action.AuthData.email,
                isAuth: action.AuthData.isAuth
            }
        default:
            return state
    }
}

export const setUserAuthData = (AuthData) => ({type: SET_USER_AUTH_DATA, AuthData})

export const authUser = () => async (dispatch) => {
        let response = await authAPI.authMe()
                if(response.data.resultCode===0){
                    let {email, id, login } = response.data.data
                    dispatch(setUserAuthData({email, id, login, isAuth: true}))}
}

export const loginUser = (email, password, rememberMe=false) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
                if(response.resultCode=== 0){dispatch(authUser())}
                else {
                dispatch(stopSubmit("login", {_error: response.messages}))   //stopSubmit це actionCreator з бібліотеки redux-form який дозволяє обробляти помилки, першим параметром треба задати ім'я форми а другим параметром ім'я конеретних елементів форми і їх помилку або _error для всієї форми.
                }

}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout()
                if(response.resultCode===0){
                    let email = null
                    let id = null
                    let login = null
                    let AuthData = {email, id, login , isAuth: false}
                dispatch((setUserAuthData(AuthData)))}

}


export default AuthReducer