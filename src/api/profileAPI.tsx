import {photosType, profileType} from "../Type/Types";
import {defaultResponse, instance } from "./api";





export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance.get<profileType>(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus(userId: number) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put<defaultResponse<any>>(`profile/status`, {
                status: status
            })
                .then(response => response.data)
        )
    },
    uploadAvatar(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return (
            instance.put<defaultResponse<{photos:photosType}>>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => response.data)
        )
    },
    uploadProfileData(profileData: profileType) {
        return (
            instance.put<defaultResponse<{}>>(`profile`, profileData)
                .then(response => response.data)
        )
    }
}