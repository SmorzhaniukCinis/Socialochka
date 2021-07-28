import {usersAPI} from "../api/api";
import {setSubscription} from "./Priofile-reducer";

const SET_USERS = 'USER/SET-USERS'
const SUBSCRIBE_USER = 'USER/SUBSCRIBE-USER'
const UNSUBSCRIBE_USER = 'USER/UNSUBSCRIBE-USER'
const CHANGE_PAGE = 'USER/CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'USER/SET_TOTAL_USERS_COUNT'
const DATA_FETCHING = 'USER/DATA_FETCHING'
const FOLLOWING_IN_PROGRESS = 'USER/FOLLOWING_IN_PROGRESS'
const SET_CURRENT_PORTION = 'USER/SET_CURRENT_PORTION'


let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 5,
    portionCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    PortionNumber: 1
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
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        case SET_CURRENT_PORTION:
            return {
                ...state,
                PortionNumber: action.PortionNumber
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
export const setCurrentPortion = (PortionNumber) => ({type: SET_CURRENT_PORTION, PortionNumber})


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(dataFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(dataFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}
export const unFollowUser = (id) => async (dispatch) => {
    dispatch(onFollowingProgress(id, true))
    let response = await usersAPI.unFollowUser(id)
    if (response.resultCode === 0) {
        dispatch(unFollow(id))
        debugger
        dispatch(setSubscription(true))
    }
    dispatch(onFollowingProgress(id, false))
}
export const followUser = (id) => async (dispatch) => {
    dispatch(onFollowingProgress(id, true))
    let response = await usersAPI.FollowUser(id)
    if (response.resultCode === 0) {
        dispatch(follow(id))
        dispatch(setSubscription(false))

    }
    dispatch(onFollowingProgress(id, false))
}

export default usersReducer