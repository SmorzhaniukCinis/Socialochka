import {AppStateType} from "../redux-store";

export const getUserId = (state:AppStateType) => {
    return state.auth.id
}
export const getIsAuth = (state:AppStateType) => {
    return state.auth.isAuth
}
export const getLogin = (state:AppStateType) => {
    return state.auth.login
}
export const getUserPhoto = (state:AppStateType) => {
    return state.auth.userPhoto
}