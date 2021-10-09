import {ProfileActions} from "./Priofile-reducer";
import {usersDataType} from "../Type/Types";
import {InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

type followingInProgressType = {}
export type initialStateType = {
    usersData: Array<usersDataType>
    totalCount: number
    pageSize: number
    portionCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<followingInProgressType>
    PortionNumber: number
    searchingUserName: string
}
let initialState: initialStateType = {
    usersData: [],
    totalCount: 0,
    pageSize: 10,
    portionCount: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    PortionNumber: 1,
    searchingUserName: ''
}

const usersReducer = (state = initialState, action: actionsTypes) => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, usersData: action.users}

        case "SUBSCRIBE_USER":
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case 'UNSUBSCRIBE_USER':
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case 'CHANGE_PAGE':
            return {...state, currentPage: action.page}

        case 'DATA_FETCHING':
            return {...state, isFetching: action.status}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalCount: action.totalCount}

        case 'FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.status
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        case 'SET_CURRENT_PORTION':
            return {
                ...state,
                PortionNumber: action.PortionNumber
            }
         case 'SET_SEARCHING_USER_NAME':
            return {
                ...state,
                searchingUserName: action.userName
            }

        default:
            return state
    }
}

type actionsTypes = InferActionsTypes<typeof UserActions>

export const UserActions = {
    follow: (id: number) => ({type: 'SUBSCRIBE_USER', id} as const),
    unFollow: (id: number) => ({type: 'UNSUBSCRIBE_USER', id} as const),
    setUsers: (users: Array<usersDataType>) => ({type: 'SET_USERS', users} as const),
    changePage: (page: number) => ({type: 'CHANGE_PAGE', page} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const),
    dataFetching: (status: boolean) => ({type: 'DATA_FETCHING', status} as const),
    onFollowingProgress: (id: number, status: boolean) => ({type: 'FOLLOWING_IN_PROGRESS', id, status} as const),
    setCurrentPortion: (PortionNumber: number) => ({type: 'SET_CURRENT_PORTION', PortionNumber} as const),
    setSearchingUserName: (userName: string) => ({type: 'SET_SEARCHING_USER_NAME', userName} as const)
}


export const getUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch) => {
        dispatch(UserActions.dataFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(UserActions.dataFetching(false))
        dispatch(UserActions.setUsers(response.items))
        dispatch(UserActions.setTotalUsersCount(response.totalCount))
    }
export const searchUsers = (userName: string, page?: number) =>
    async (dispatch: Dispatch, getState:()=>initialStateType) => {
        dispatch(UserActions.dataFetching(true))
        let response = await usersAPI.getUsersName(userName, page , getState().totalCount )
        dispatch(UserActions.dataFetching(false))
        dispatch(UserActions.setSearchingUserName(userName))
        dispatch(UserActions.setUsers(response.items))
        dispatch(UserActions.setTotalUsersCount(response.totalCount))
    }
export const unFollowUser = (id: number) =>
    async (dispatch: Dispatch) => {
        dispatch(UserActions.onFollowingProgress(id, true))
        let response = await usersAPI.unFollowUser(id)
        if (response.resultCode === 0) {
            dispatch(UserActions.unFollow(id))
            dispatch(ProfileActions.setSubscription(false))
        }
        dispatch(UserActions.onFollowingProgress(id, false))
    }
export const followUser = (id: number) =>
    async (dispatch: Dispatch) => {
        dispatch(UserActions.onFollowingProgress(id, true))
        let response = await usersAPI.FollowUser(id)
        if (response.resultCode === 0) {
            dispatch(UserActions.follow(id))
            dispatch(ProfileActions.setSubscription(true))

        }
        dispatch(UserActions.onFollowingProgress(id, false))
    }

export default usersReducer