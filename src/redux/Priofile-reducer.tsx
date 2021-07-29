import {profileAPI, usersAPI} from "../api/api";
import * as _ from 'lodash';


const ADD_POST = 'PROFILE/ADD-POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_DATA = 'PROFILE/SET_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const SET_AVATAR_PHOTO = 'PROFILE/SET_AVATAR_PHOTO'
const SET_SUBSCRIPTION = 'PROFILE/SET_SUBSCRIPTION'

let initialState = {
    posts: [],
    newPostText: '',
    profile: [],
    subscription: null,
    settingData: false,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    let stateClone = _.cloneDeep(state)

    switch (action.type) {
        case  ADD_POST:
            stateClone.posts.push({postText: action.text, id: 5, likeCount: 0})
            return stateClone

        case SET_PROFILE:
            stateClone.profile = action.profile
            return stateClone

        case SET_DATA:
            stateClone.settingData = action.settingData
            return stateClone

        case SET_STATUS:
            stateClone.status = action.status
            return stateClone

        case SET_AVATAR_PHOTO:
            stateClone.profile.photos = action.photo
            return stateClone
        case SET_SUBSCRIPTION:
            debugger
            stateClone.subscription = action.subscription
            return stateClone
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: ADD_POST, text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setData = (settingData) => ({type: SET_DATA, settingData})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setNewAvatarImgSuccess = (photo) => ({type: SET_AVATAR_PHOTO, photo})
export const setSubscription = (subscription) => ({type: SET_SUBSCRIPTION, subscription})


export const requestProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
    dispatch(requestCurrentUser(response.fullName))
}
export const requestStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setNewAvatarImg = (file) => async (dispatch) => {
    let response = await profileAPI.uploadAvatar(file)
    if (response.resultCode === 0) {
        dispatch(setNewAvatarImgSuccess(response.data.photos))
    }
}
export const uploadProfileData = (profileData, userId) => async (dispatch) => {
    let response = await profileAPI.uploadProfileData(profileData)
    if (response.resultCode === 0) {
        dispatch(requestProfile(userId))
    }
}
export const requestCurrentUser = (name) => async (dispatch) => {
    debugger
    let response = await usersAPI.getUsersName(name)
    if (response.items.length) {
        dispatch(setSubscription(response.items[0].followed))
    }
}


export default profileReducer