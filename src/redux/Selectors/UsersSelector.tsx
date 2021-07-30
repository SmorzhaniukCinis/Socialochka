import {AppStateType} from "../redux-store";

export const getPortionNumber = (state:AppStateType) => {
    return state.usersPage.PortionNumber
}
export const getPortionCount = (state:AppStateType) => {
    return state.usersPage.portionCount
}
export const getFollowingInProgress = (state:AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state:AppStateType) => {
    return state.usersPage.totalCount
}
export const getUsersData = (state:AppStateType) => {
    return state.usersPage.usersData
}
