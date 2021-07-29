export const getPortionNumber = (state) => {
    return state.usersPage.PortionNumber
}
export const getPortionCount = (state) => {
    return state.usersPage.portionCount
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getUsersData = (state) => {
    return state.usersPage.usersData
}
