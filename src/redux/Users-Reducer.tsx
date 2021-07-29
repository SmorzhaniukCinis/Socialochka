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


type usersDataType = {
    id: number | null
}
type followingInProgressType = {

}
type initialStateType = {
    usersData: Array<usersDataType>
    totalCount: number
    pageSize: number
    portionCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<followingInProgressType>
    PortionNumber: number
}
let initialState:initialStateType = {
    usersData: [],
    totalCount: 0,
    pageSize: 5,
    portionCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    PortionNumber: 1
}

const usersReducer = (state = initialState, action:any) => {
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

type followType = {
    type: typeof SUBSCRIBE_USER
    id: number
}
export const follow = (id:number):followType => ({type: SUBSCRIBE_USER, id})
type unFollowType = {
    type: typeof UNSUBSCRIBE_USER
    id: number
}
export const unFollow = (id:number):unFollowType => ({type: UNSUBSCRIBE_USER, id})
type setUsersType = {
    type: typeof SET_USERS
    users: Array<usersDataType>
}
export const setUsers = (users: Array<usersDataType>):setUsersType => ({type: SET_USERS, users})
type changePageType = {
    type: typeof CHANGE_PAGE
    page: number
}
export const changePage = (page:number):changePageType => ({type: CHANGE_PAGE, page})
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount:number):setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
type dataFetchingType = {
    type: typeof DATA_FETCHING
    status: boolean
}
export const dataFetching = (status: boolean):dataFetchingType => ({type: DATA_FETCHING, status})
type onFollowingProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS
    status: boolean
    id: number
}
export const onFollowingProgress = (id:number, status: boolean):onFollowingProgressType => ({type: FOLLOWING_IN_PROGRESS, id, status})
type setCurrentPortionType = {
    type: typeof SET_CURRENT_PORTION
    PortionNumber: number
}
export const setCurrentPortion = (PortionNumber:number):setCurrentPortionType => ({type: SET_CURRENT_PORTION, PortionNumber})


export const getUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {
    dispatch(dataFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(dataFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}
export const unFollowUser = (id:number) => async (dispatch:any) => {
    dispatch(onFollowingProgress(id, true))
    let response = await usersAPI.unFollowUser(id)
    if (response.resultCode === 0) {
        dispatch(unFollow(id))
        debugger
        dispatch(setSubscription(false))
    }
    dispatch(onFollowingProgress(id, false))
}
export const followUser = (id:number) => async (dispatch:any) => {
    dispatch(onFollowingProgress(id, true))
    let response = await usersAPI.FollowUser(id)
    if (response.resultCode === 0) {
        dispatch(follow(id))
        debugger
        dispatch(setSubscription(true))

    }
    dispatch(onFollowingProgress(id, false))
}

export default usersReducer