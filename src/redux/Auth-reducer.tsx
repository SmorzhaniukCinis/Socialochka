import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";
import {profileAPI} from "../api/profileAPI";

type initialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaURL: string | null
    userPhoto: string | null
}

let initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null,
    userPhoto: ''
}


const AuthReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "SET_USER_AUTH_DATA":
            return {
                ...state,
                id: action.AuthData.id,
                login: action.AuthData.login,
                email: action.AuthData.email,
                isAuth: action.AuthData.isAuth
            }
        case "SET_USER_PHOTO":
            return {
                ...state,
                userPhoto: action.photoUrl
            }
        case "SET_CAPTCHA_URL":
            return {
                ...state,
                captchaURL: action.url
            }
        default:
            return state
    }
}

type ActionTypes = InferActionsTypes<typeof AuthActions>

export const AuthActions = {
    setUserAuthData: (AuthData: AuthDataType) => ({type: "SET_USER_AUTH_DATA", AuthData} as const),
    setCaptchaURL: (url: string) => ({type: "SET_CAPTCHA_URL", url} as const),
    setUserPhoto: (photoUrl: string | null) => ({type: "SET_USER_PHOTO", photoUrl} as const)
}

export type AuthDataType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}


export const authUser = () => async (dispatch: Dispatch<ActionTypes>, getState: initialStateType) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(AuthActions.setUserAuthData({email, id, login, isAuth: true}))
        let res = await profileAPI.getProfile(id)
        dispatch(AuthActions.setUserPhoto(res.photos.small))
    }
}

export const loginUser = (email: string, password: string, rememberMe = false, captcha: string) =>
    async (dispatch: Dispatch<ActionTypes>, getState: initialStateType) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            // @ts-ignore
            dispatch(authUser())
            if (getState.id) {
                let res = await profileAPI.getProfile(getState.id)
                dispatch(AuthActions.setUserPhoto(res.photos.small))
            }
        } else {
            if (response.resultCode === 10) {
                // @ts-ignore
                dispatch(getCaptcha())
            }
        }

    }

export const logoutUser = () => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        let email = null
        let id = null
        let login = null
        let AuthData: AuthDataType = {email, id, login, isAuth: false}
        dispatch((AuthActions.setUserAuthData(AuthData)))
    }

}
export const getCaptcha = () => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await securityAPI.getCaptchaURL()
    dispatch((AuthActions.setCaptchaURL(response.url)))
}


export default AuthReducer