import {instance} from "./api";




export const dialogsAPI = {
    startChatting(userId:number) {
        return (
            instance.put<any>(`dialogs/6`)
                .then(response => response.data)
        )
    },
    sendMessage(userId:number, body:string) {
        return (
            instance.post<any>(`dialogs/6/messages`, {body})
                .then(response => response.data.data)
        )
    },
}