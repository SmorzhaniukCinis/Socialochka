import {getUsersType, instance } from "./api"



export const friendsAPI = {
    getFriends() {
        return (
            instance.get<getUsersType>('users?friend=true&count=100').then(response => response.data)
        )
    }
}