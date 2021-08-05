import axios from "axios";
import {usersDataType} from "../Type/Types";


export const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8744d81b-6b25-423d-8558-71644b170fd6'
    }
})

export type getUsersType = {
    items: Array<usersDataType>
    totalCount: number
    error: string | null
}

export type defaultResponse<D> ={
    resultCode: number
    messages: Array<string>,
    data: D
}









