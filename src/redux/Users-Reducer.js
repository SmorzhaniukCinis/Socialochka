import {usersAPI} from "../api/api";

const SET_USERS = 'SET-USERS'
const SUBSCRIBE_USER = 'SUBSCRIBE-USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE-USER'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const DATA_FETCHING = 'DATA_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'


let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, usersData: action.users}

        case SUBSCRIBE_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNSUBSCRIBE_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case CHANGE_PAGE:
            return {...state, currentPage: action.page}

        case DATA_FETCHING:
            return {...state, isFetching: action.status}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.status
                    ?[...state.followingInProgress, action.id]
                    :state.followingInProgress.filter(id=> id != action.id)
            }
        default:
            return state
    }
}

export const follow = (id) => ({type: SUBSCRIBE_USER, id})
export const unFollow = (id) => ({type: UNSUBSCRIBE_USER, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const changePage = (page) => ({type: CHANGE_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const dataFetching = (status) => ({type: DATA_FETCHING, status})
export const onFollowingProgress = (id, status) => ({type: FOLLOWING_IN_PROGRESS, id, status})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(dataFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data=> {
            dispatch(dataFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })

}}
export const unFollowUser = (id) => {
    return (dispatch) => {
        debugger
        dispatch(onFollowingProgress(id, true))
        usersAPI.unFollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(id))
                }
                dispatch(onFollowingProgress(id, false))
            })

}}

export const followUser = (id) => {
    return (dispatch) => {
        dispatch(onFollowingProgress(id, true))
        usersAPI.FollowUser(id)
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(onFollowingProgress(id, false))
            })

}}

export default usersReducer