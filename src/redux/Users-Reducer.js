const SET_USERS = 'SET-USERS'
const SUBSCRIBE_USER = 'SUBSCRIBE-USER'
const UNSUBSCRIBE_USER = 'UNSUBSCRIBE-USER'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const DATA_FETCHING = 'DATA_FETCHING'


let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
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
                        return {...user, suby: true}
                    }
                    return user
                })
            }

        case UNSUBSCRIBE_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, suby: false}
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
        default:
            return state
    }
}

export const followUser = (id) => ({type: SUBSCRIBE_USER, id})
export const unFollowUser = (id) => ({type: UNSUBSCRIBE_USER, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const changePage = (page) => ({type: CHANGE_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const dataFetching = (status) => ({type: DATA_FETCHING, status})

export default usersReducer