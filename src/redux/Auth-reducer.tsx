import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_AUTH_DATA = 'AUTH/SET_USER_AUTH_DATA'
let SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL'

type initialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth : boolean
    captchaURL : string | null
}

let initialState:initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth : false,
    captchaURL : null
}


const AuthReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                id: action.AuthData.id,
                login: action.AuthData.login,
                email: action.AuthData.email,
                isAuth: action.AuthData.isAuth
            }
            case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }
        default:
            return state
    }
}
export type AuthDataType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
type setUserAuthDataType = {
    type: typeof SET_USER_AUTH_DATA
    AuthData: AuthDataType
}
export const setUserAuthData = (AuthData:AuthDataType):setUserAuthDataType => ({type: SET_USER_AUTH_DATA, AuthData})

type setCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL
    url: string
}
export const setCaptchaURL = (url:string):setCaptchaURLType => ({type: SET_CAPTCHA_URL, url})

export const authUser = () => async (dispatch:any) => {
        let response = await authAPI.authMe()
                if(response.data.resultCode===0){
                    let {email, id, login } = response.data.data
                    dispatch(setUserAuthData({email, id, login, isAuth: true}))}
}

export const loginUser = (email:string, password:number, rememberMe=false, captcha:string) => async (dispatch:any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha )
                if(response.resultCode=== 0){dispatch(authUser())}
                else {
                    if(response.resultCode === 10) {
                        dispatch(getCaptcha())
                    }
                    dispatch(stopSubmit("login", {_error: response.messages}))   //stopSubmit це actionCreator з бібліотеки redux-form який дозволяє обробляти помилки, першим параметром треба задати ім'я форми а другим параметром ім'я конеретних елементів форми і їх помилку або _error для всієї форми.
                }

}

export const logoutUser = () => async (dispatch:any) => {
    let response = await authAPI.logout()
                if(response.resultCode===0){
                    let email = null
                    let id = null
                    let login = null
                    let AuthData:AuthDataType = {email, id, login , isAuth: false}
                dispatch((setUserAuthData(AuthData)))}

}
export const getCaptcha = () => async (dispatch:any) => {
    let response = await securityAPI.getCaptchaURL()
                   dispatch((setCaptchaURL(response.url)))}




export default AuthReducer