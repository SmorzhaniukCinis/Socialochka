import axios from "axios";
import {profileType, usersDataType} from "../Type/Type";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8744d81b-6b25-423d-8558-71644b170fd6'
    }
})

type getUsersType = {
    Items: usersDataType
    totalCount: number
    error: string
}
type defaultResponce ={
    resultCode: number
    messages: Array<string>,
    data: any
}


export const usersAPI = {
    getUsers (currentPage:number, pageSize:number) {
        return (
            instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`
            ).then(response=> response.data)
        )
    },
    getUsersName (name:string) {
        return (
            instance.get<getUsersType>(`users?term=${name}`
            ).then(response=> response.data)
        )
    },
    unFollowUser (id:number) {
        return (
            instance.delete<defaultResponce>(`follow/${id}`)
                .then(response=> response.data)
        )
    },
    FollowUser (id:number) {
        return (
            instance.post<defaultResponce>(`follow/${id}`, null  )
                .then(response=> response.data)
        )
    }
}






export const profileAPI = {
    getProfile (userId:number) {
        return (
            instance.get<profileType>(`profile/${userId}`)
                .then(response=> response.data)
        )
    },
    getStatus (userId:number) {
        return(
            instance.get(`profile/status/${userId}`)
                .then(response=> response.data)
        )
    },
    updateStatus (status:string) {
        return(
            instance.put<defaultResponce>(`profile/status`, {
                status: status
            })
                .then(response=> response.data)
        )
    },
    uploadAvatar (file:any) {
        const formData = new FormData()
        formData.append('image' , file)
        return(
            instance.put<defaultResponce>(`profile/photo`, formData,  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response=> response.data)
        )
    },
    uploadProfileData (profileData: profileType) {
        return(
            instance.put<defaultResponce>(`profile`,   profileData)
                .then(response=> response.data)
        )
    }
}



type authMe = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}


export const authAPI = {
    authMe () {
        return(
            instance.get<authMe>('auth/me')
                .then(response=> response)
        )
    },
    login (email:string, password:string, rememberMe = false, captcha:null |string = null ) {
        return(
            instance.post<defaultResponce>("auth/login", {email, password, rememberMe, captcha}).
                then(response => response.data)
        )
    },
    logout () {
        return(
            instance.delete<defaultResponce>("auth/login").
                then(response => response.data)
        )
    }
}





export const securityAPI = {
    getCaptchaURL () {
        return(
            instance.get('security/get-captcha-url').
                then(response => response.data)
        )
    }
}



export const friendsAPI = {
    getFriends () {
        return(
            instance.get<getUsersType>('users?friend=true&count=100').
            then(response => response.data)
        )
    }
}

