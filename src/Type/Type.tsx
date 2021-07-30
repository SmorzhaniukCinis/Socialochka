
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

