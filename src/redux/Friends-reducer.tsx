import * as _ from 'lodash';
import {friendsAPI} from "../api/api";
import {friendsType} from "../Type/Types";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";

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
        case "SET_FRIENDS" :
            stateClone.friends = action.friends
            return stateClone
        case "PRELOADER" :
            stateClone.preloader = action.value
            return stateClone
        default:
            return state
    }

}

type ActionTypes = InferActionsTypes<typeof FriendsActions>

export  const  FriendsActions = {
    setFriends: (friends:Array<friendsType>) => ({type: "SET_FRIENDS", friends} as const ),
    viewPreloader: (value:boolean) => ({type: "PRELOADER", value} as const )
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


export default friendsReducer