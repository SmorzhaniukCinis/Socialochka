import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_DATA = 'SET_PROFILE'

let initialState = {
    posts: [
        {postText: "df673tsdf", id: 1, likeCount: 10},
        {postText: "dgdfgdfgdfsdsdf", id: 2, likeCount: 10},
        {postText: "dgdfg", id: 3, likeCount: 10},
        {postText: "ertete", id: 4, likeCount: 10},
    ],
    newPostText: '',
    profile: [],
    settingData: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            if (state.newPostText === '') {
                alert('Enter your post')
                return state
            } else {
                return {
                    ...state,
                    posts: [...state.posts, {postText: state.newPostText, id: 5, likeCount: 0}],
                    newPostText: ''
                }
            }


        case CHANGE_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}

        case SET_DATA:
            return {...state, settingData: action.settingData}

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const changePostAC = (PostText) => ({type: CHANGE_POST, text: PostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setData = (settingData) => ({type: SET_DATA, settingData})


export const getProfile = (userId) => {
    return (dispath) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispath(setProfile(data))
            })
    }
}



export default profileReducer