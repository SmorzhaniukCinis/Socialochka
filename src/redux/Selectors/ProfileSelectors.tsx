import {AppStateType} from "../redux-store";

export const getProfile = (state:AppStateType) => {
    return state.profile.profile
}

export const getStatus = (state:AppStateType) => {
    return state.profile.status
}