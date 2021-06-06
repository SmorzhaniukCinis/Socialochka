import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_DATA = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

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
    switch (action.type) {
        case  ADD_POST:
            if (action.text === '') {
                alert('Enter your post')
                return state
            } else {
                return {
                    ...state,
                    posts: [...state.posts, {postText: action.text, id: 5, likeCount: 0}],
                }
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}

        case SET_DATA:
            return {...state, settingData: action.settingData}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}

export const addPostAC = (text) => ({type: ADD_POST, text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setData = (settingData) => ({type: SET_DATA, settingData})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => {
    return (dispath) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispath(setProfile(data))
            })
    }
}
export const getStatus = (userId) => {
    return (dispath) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispath(setStatus(data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispath) => {
        profileAPI.updateStatus(status)
            .then(data =>{
                debugger
                if (data.resultCode === 0) {
                    dispath(setStatus(status))
                }
            }
    )
    }
}


export default profileReducer