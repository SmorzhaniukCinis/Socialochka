import * as _ from 'lodash';
import {photosType, postsType, profileType} from "../Type/Types";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/usersAPI";
import {profileAPI} from "../api/profileAPI";

type initialStateType = {
    posts: Array<postsType>
    newPostText: string
    profile: profileType
    subscription: boolean | null
    settingData: boolean
    status: string
}
let initialState: initialStateType = {
    posts: [],
    newPostText: '',
    profile: {
        aboutMe: "",
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    },
    subscription: null,
    settingData: false,
    status: ''
}

const profileReducer = (state = initialState, action: ActionTypes) => {
    let stateClone = _.cloneDeep(state)

    switch (action.type) {
        case  "ADD_POST":
            stateClone.posts.push({postText: action.text, id: 5, likeCount: 0})
            return stateClone

        case "SET_PROFILE":
            stateClone.profile = action.profile
            return stateClone

        case "SET_DATA":
            stateClone.settingData = action.settingData
            return stateClone

        case "SET_STATUS":
            stateClone.status = action.status
            return stateClone

        case "SET_AVATAR_PHOTO":
            stateClone.profile.photos = action.photo
            return stateClone
        case "SET_SUBSCRIPTION":

            stateClone.subscription = action.subscription
            return stateClone
        default:
            return state
    }
}

type ActionTypes = InferActionsTypes<typeof ProfileActions>



export const ProfileActions = {
    addPostAC: (text: string) => ({type: "ADD_POST", text} as const),
    setProfile: (profile: profileType) => ({type: "SET_PROFILE", profile} as const),
    setData: (settingData: any) => ({type: "SET_DATA", settingData} as const),
    setStatus: (status: string) => ({type: "SET_STATUS", status} as const),
    setNewAvatarImgSuccess: (photo: photosType)=> ({type: "SET_AVATAR_PHOTO", photo} as const),
    setSubscription: (subscription: boolean) => ({type: "SET_SUBSCRIPTION", subscription} as const)
}



export const requestProfile = (userId: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(ProfileActions.setProfile(response))
        // @ts-ignore
        dispatch(requestCurrentUser(response.fullName))
    }
export const requestStatus = (userId: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(ProfileActions.setStatus(response))

    }
export const updateStatus = (status: string) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(ProfileActions.setStatus(status))
        }
    }
export const setNewAvatarImg = (file: any) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.uploadAvatar(file)
        if (response.resultCode === 0) {
            dispatch(ProfileActions.setNewAvatarImgSuccess(response.data.photos))
        }
    }
export const uploadProfileData = (profileData: any, userId: number) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.uploadProfileData(profileData)
        if (response.resultCode === 0) {
            // @ts-ignore
            dispatch(requestProfile(userId))
        }
    }
export const requestCurrentUser = (name: string) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        let response = await usersAPI.getUsersName(name)
        if (response.items.length) {
            dispatch(ProfileActions.setSubscription(response.items[0].followed))
        }
    }


export default profileReducer