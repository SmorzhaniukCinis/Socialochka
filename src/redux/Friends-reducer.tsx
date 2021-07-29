import * as _ from 'lodash';
import {friendsAPI} from "../api/api";


const SET_FRIENDS = 'SET_FRIENDS'
const PRELOADER = 'PRELOADER'

type friendsType =  {
    name: string | null,
    id: number| null,
    photos: string| null,
    status: string| null,
    followed: boolean | null
}
type initialStateType = {
    friends: friendsType
    preloader: boolean
}
let initialState:initialStateType = {
    friends: {
        name: null,
        id: null,
        photos: null,
        status: null,
        followed: null
    },
    preloader: true
}



const friendsReducer = (state=initialState, action:any):initialStateType => {
    let stateClone = _.cloneDeep(state)
    switch (action.type) {
        case SET_FRIENDS :
            stateClone.friends = action.friends
            return stateClone
        case PRELOADER :
            stateClone.preloader = action.value
            return stateClone
        default:
            return state
    }

}
type setFriendsType= {
    type: typeof SET_FRIENDS
    friends: friendsType
}
const setFriends = (friends:friendsType):setFriendsType => ({type: SET_FRIENDS, friends})

type viewPreloaderType= {
    type: typeof PRELOADER
    value: boolean
}
const viewPreloader = (value:boolean):viewPreloaderType => ({type: PRELOADER, value})


export const getFriends = () => async (dispatch:any) => {
    dispatch(viewPreloader(true))
    let response = await friendsAPI.getFriends()
    if (response.error === null) {
        dispatch(setFriends(response.items))
        dispatch(viewPreloader(false))
    }
}


export default friendsReducer