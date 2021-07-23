import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8744d81b-6b25-423d-8558-71644b170fd6'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`
            ).then(response=> response.data)
        )
    },
    unFollowUser (id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response=> response.data)
        )
    },
    FollowUser (id) {
        return (
            instance.post(`follow/${id}`, null  )
                .then(response=> response.data)
        )
    }
}

export const profileAPI = {
    getProfile (userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response=> response.data)
        )
    },
    getStatus (userId) {
        return(
            instance.get(`profile/status/${userId}`)
                .then(response=> response.data)
        )
    },
    updateStatus (status) {
        return(
            instance.put(`profile/status`, {
                status: status
            })
                .then(response=> response.data)
        )
    },
    uploadAvatar (file) {
        const formData = new FormData()
        formData.append('image' , file)
        return(
            instance.put(`profile/photo`, formData,  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response=> response.data)
        )
    },
    uploadProfileData (profileData) {
        return(
            instance.put(`profile`,   profileData)
                .then(response=> response.data)
        )
    }
}
export const authAPI = {
    authMe () {
        return(
            instance.get('auth/me')
                .then(response=> response)
        )
    },
    login (email, password, rememberMe = false, captcha = null) {
        return(
            instance.post("auth/login", {email, password, rememberMe, captcha}).
                then(response => response.data)
        )
    },
    logout () {
        return(
            instance.delete("auth/login").
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

