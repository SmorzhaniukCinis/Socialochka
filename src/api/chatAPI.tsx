import {chatMessagesType} from "../components/ChatPage/ChatMessages/ChatMessages";

let subscribers = [] as Array<(messages: chatMessagesType[]) => void>

let ws : WebSocket | null = null

const messageHandler = (e:MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessage))
}



function createWSChannel() {
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
    startWS() {
        createWSChannel()
    },
    stopWS() {
        subscribers = []
        ws?.removeEventListener('message' , messageHandler)
        ws?.close()
    },
    subscribe(callback: ((messages: chatMessagesType[]) => void) | undefined) {
        if(callback !== undefined){
            subscribers.push(callback)
        }
    },
    unSubscribe(callback: ((messages: chatMessagesType[]) => void) | undefined) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message:string){
        ws?.send(message)
    }
}

