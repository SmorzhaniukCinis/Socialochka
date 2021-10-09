import * as _ from 'lodash';
import {friendsType} from "../Type/Types";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";
import {friendsAPI} from "../api/friendsAPI";
import {usersAPI} from "../api/usersAPI";

type initialStateType = {
    friends: Array<friendsType>
    preloader: boolean
    searchName: string
}
let initialState:initialStateType = {
    friends: [],
    preloader: true,
    searchName: ''
}



const friendsReducer = (state=initialState, action:ActionTypes):initialStateType => {
    let stateClone = _.cloneDeep(state)
    switch (action.type) {
        case "SET_FRIENDS" :
            stateClone.friends = action.friends
            return stateClone
        case "PRELOADER" :
            stateClone.preloader = action.value
            return stateClone
        case "SET_SEARCHING_FRIEND_NAME" :
            stateClone.searchName = action.userName
            return stateClone
        default:
            return state
    }

}

type ActionTypes = InferActionsTypes<typeof FriendsActions>

export  const  FriendsActions = {
    setFriends: (friends:Array<friendsType>) => ({type: "SET_FRIENDS", friends} as const ),
    viewPreloader: (value:boolean) => ({type: "PRELOADER", value} as const ),
    setSearchingFriendName: (userName: string) => ({type: 'SET_SEARCHING_FRIEND_NAME', userName} as const)
}

export const getFriends = () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(FriendsActions.viewPreloader(true))
    let response = await friendsAPI.getFriends()
    if (response.error === null) {
        // @ts-ignore
        dispatch(FriendsActions.setFriends(response.items))
        dispatch(FriendsActions.viewPreloader(false))
    }
}
export const searchFiends = (userName: string) =>
    async (dispatch: Dispatch) => {
        dispatch(FriendsActions.viewPreloader(true))
        let response = await usersAPI.getUsersName(userName,1, 100, true)
        dispatch(FriendsActions.viewPreloader(false))
        dispatch(FriendsActions.setSearchingFriendName(userName))
        // @ts-ignore
        dispatch(FriendsActions.setFriends(response.items))
    }


export default friendsReducer