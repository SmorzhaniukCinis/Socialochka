import {defaultResponse, getUsersType, instance } from "./api"





export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`
            ).then(response => response.data)
        )
    },
    getUsersName(name: string, friend?: boolean | null) {
        return (
            instance.get<getUsersType>(`users?term=${name}&friend=${friend}&count=100`
            ).then(response => response.data)
        )
    },
    unFollowUser(id: number) {
        return (
            instance.delete<defaultResponse<{}>>(`follow/${id}`)
                .then(response => response.data)
        )
    },
    FollowUser(id: number) {
        return (
            instance.post<defaultResponse<{}>>(`follow/${id}`, null)
                .then(response => response.data)
        )
    }
}