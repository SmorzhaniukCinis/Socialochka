
export type photosType = {
    small: string | null
    large: string | null
}
export type usersDataType = {
    id: number | null
    name: string
    photos: photosType
    status: string | null,
    followed: boolean
}
export type messageDataType = {
    id: number
    messageItem: string
}
export type DialogsDataType = {
    id: number
    name: string
    photo: string
}
export type friendsType =  {
    name: string | null,
    id: number| null,
    photos: string| null,
    status: string| null,
    followed: boolean | null
}
export type postsType = {
    postText: string
    id: number
    likeCount: number}

export type contactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram:string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type profileType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | undefined
    fullName: string | undefined
    contacts: contactsType
    photos: photosType
    aboutMe: string | undefined
}
