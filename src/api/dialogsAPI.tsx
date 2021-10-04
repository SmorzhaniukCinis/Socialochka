import {instance} from "./api";


type getMessageItem = {
    id: string
    body: string
    translatedBody: boolean
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}

type getMessage = {
    items: Array<getMessageItem>
    totalCount: number
    error: boolean
}

type sandMessage = {
    data: {
        message: {
            id:string
            body: string
            translatedBody:any
            addedAt: string
            senderId: number
            senderName: string
            recipientId: number
            recipientName: string
            viewed: boolean
            deletedBySender: boolean
            deletedByRecipient: boolean
            isSpam: boolean
            distributionId: number | null
        }
    }
    messages: any
    fieldsErrors: any
    resultCode: number
}

type startChatting = {
    data:any
    messages:any
    fieldsErrors:any
    resultCode: number
}

export const dialogsAPI = {
    startChatting(userId:number) {
        return (
            instance.put<startChatting>(`dialogs/${userId}`)
                .then(response => response.data)
        )
    },
    sendMessage(userId:number, body:string) {
        return (
            instance.post<sandMessage>(`dialogs/${userId}/messages`, {body})
                .then(response => response.data.data.message)
        )
    },
    getMessage(userId:number) {
        return (
            instance.get<getMessage>(`dialogs/${userId}/messages`,)
                .then(response => response.data)
        )
    },
}