import * as _ from 'lodash';
import {friendsAPI} from "../api/api";
import {friendsType} from "../Type/Type";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";


const SET_FRIENDS = 'SET_FRIENDS'
const PRELOADER = 'PRELOADER'


type initialStateType = {
    friends: Array<friendsType>
    preloader: boolean
}
let initialState:initialStateType = {
    friends: [],
    preloader: true
}



const friendsReducer = (state=initialState, action:ActionTypes):initialStateType => {
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

type ActionTypes = setFriendsType | viewPreloaderType


type setFriendsType= {
    type: typeof SET_FRIENDS
    friends: Array<friendsType>
}
const setFriends = (friends:Array<friendsType>):setFriendsType => ({type: SET_FRIENDS, friends})

type viewPreloaderType= {
    type: typeof PRELOADER
    value: boolean
}
const viewPreloader = (value:boolean):viewPreloaderType => ({type: PRELOADER, value})


export const getFriends = () => async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    dispatch(viewPreloader(true))
    let response = await friendsAPI.getFriends()
    if (response.error === null) {
        dispatch(setFriends(response.items))
        dispatch(viewPreloader(false))
    }
}


export default friendsReducer