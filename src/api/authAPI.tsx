import {defaultResponse, instance} from "./api";



export type authMeData = {
        id: number
        email: string
        login: string
}

export const authAPI = {
    authMe() {
        return (
            instance.get<defaultResponse<authMeData>>('auth/me')
                .then(response => response)
        )
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return (
            instance.post<defaultResponse<{userId: string}>>("auth/login", {
                email,
                password,
                rememberMe,
                captcha
            }).then(response => response.data)
        )
    },
    logout() {
        return (
            instance.delete<defaultResponse<any>>("auth/login").then(response => response.data)
        )
    }
}