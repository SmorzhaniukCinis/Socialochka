import * as _ from 'lodash';
import {friendsAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS'
const PRELOADER = 'PRELOADER'

let initialState = {
    friends: {
        name: null,
        id: null,
        photos: null,
        status: null,
        followed: null
    },
    preloader: true
}


const friendsReducer = (state=initialState, action) => {
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

const setFriends = friends => ({type: SET_FRIENDS, friends})
const viewPreloader = (value) => ({type: PRELOADER, value})


export const getFriends = () => async (dispatch) => {
    dispatch(viewPreloader(true))
    let response = await friendsAPI.getFriends()
    if (response.error === null) {
        dispatch(setFriends(response.items))
        dispatch(viewPreloader(false))
    }
}


export default friendsReducer