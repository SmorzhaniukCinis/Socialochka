import {profileAPI, usersAPI} from "../api/api";
import * as _ from 'lodash';
import {photosType} from "../Type/Type";


const ADD_POST = 'PROFILE/ADD-POST'
const SET_PROFILE = 'PROFILE/SET_PROFILE'
const SET_DATA = 'PROFILE/SET_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const SET_AVATAR_PHOTO = 'PROFILE/SET_AVATAR_PHOTO'
const SET_SUBSCRIPTION = 'PROFILE/SET_SUBSCRIPTION'


type postsType = {
    postText: string
    id: number
    likeCount: number}

type contactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram:string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type profileType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: contactsType
    photos: photosType
}


type initialStateType = {
    posts: Array<postsType>
    newPostText: string
    profile: profileType
    subscription: boolean | null
    settingData: boolean
    status: string
}
let initialState:initialStateType = {
    posts: [],
    newPostText: '',
    profile: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram:null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small:  null,
            large:  null
        }
    },
    subscription: null,
    settingData: false,
    status: ''
}

const profileReducer = (state = initialState, action:any) => {
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

            stateClone.subscription = action.subscription
            return stateClone
        default:
            return state
    }
}
type addPostACType = {
    type: typeof ADD_POST
    text: string
}
export const addPostAC = (text:string):addPostACType => ({type: ADD_POST, text})

type setProfileType = {
    type: typeof SET_PROFILE
    profile:profileType
}
export const setProfile = (profile:profileType):setProfileType => ({type: SET_PROFILE, profile})

type setDataType = {
    type: typeof SET_DATA
    settingData:any
}
export const setData = (settingData:any):setDataType => ({type: SET_DATA, settingData})

type setStatusType = {
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):setStatusType => ({type: SET_STATUS, status})

type setNewAvatarImgSuccessType = {
    type: typeof SET_AVATAR_PHOTO
    photo:photosType
}
export const setNewAvatarImgSuccess = (photo:photosType):setNewAvatarImgSuccessType => ({type: SET_AVATAR_PHOTO, photo})

type setSubscriptionType = {
    type: typeof SET_SUBSCRIPTION
    subscription:boolean
}
export const setSubscription = (subscription:boolean):setSubscriptionType => ({type: SET_SUBSCRIPTION, subscription})




export const requestProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
    dispatch(requestCurrentUser(response.fullName))
}
export const requestStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))

}
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setNewAvatarImg = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.uploadAvatar(file)
    if (response.resultCode === 0) {
        dispatch(setNewAvatarImgSuccess(response.data.photos))
    }
}
export const uploadProfileData = (profileData:any, userId:number) => async (dispatch:any) => {
    let response = await profileAPI.uploadProfileData(profileData)
    if (response.resultCode === 0) {
        dispatch(requestProfile(userId))
    }
}
export const requestCurrentUser = (name:string) => async (dispatch:any) => {
    debugger
    let response = await usersAPI.getUsersName(name)
    if (response.items.length) {
        dispatch(setSubscription(response.items[0].followed))
    }
}


export default profileReducer