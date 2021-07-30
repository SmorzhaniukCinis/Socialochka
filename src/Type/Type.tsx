
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
