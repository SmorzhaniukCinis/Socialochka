import {AppStateType} from "../redux-store";

export const getFriendsData = (state:AppStateType) => {
    return state.friendsPage.friends
}
export const getPreloader = (state:AppStateType) => {
    return state.friendsPage.preloader
}
export const getSearchName = (state:AppStateType) => {
    return state.friendsPage.searchName
}