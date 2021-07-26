import {profileAPI} from "../api/api";
import * as _ from 'lodash';


const ADD_POST = 'PROFILE/ADD-POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_DATA = 'PROFILE/SET_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const SET_AVATAR_PHOTO = 'PROFILE/SET_AVATAR_PHOTO'

let initialState = {
    posts: [
        {postText: "df673tsdf", id: 1, likeCount: 10},
        {postText: "dgdfgdfgdfsdsdf", id: 2, likeCount: 10},
        {postText: "dgdfg", id: 3, likeCount: 10},
        {postText: "ertete", id: 4, likeCount: 10},
    ],
    newPostText: '',
    profile: [],
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

        default:
            return state
    }
}

export const addPostAC = (text) => ({type: ADD_POST, text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setData = (settingData) => ({type: SET_DATA, settingData})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setNewAvatarImgSuccess = (photo) => ({type: SET_AVATAR_PHOTO, photo})


export const requestProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))

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


export default profileReducer