import {chatMessagesType} from "../components/ChatPage/ChatMessages/ChatMessages";

type eventNameType = 'messageReceived' | 'statusChanged'

type messageReceivedType = (messages: chatMessagesType[]) => void
type statusChangedType = (status: 'pending' | 'connected' | 'error') => void

let subscribers = {
    'messageReceived': [] as messageReceivedType[],
    'statusChanged': [] as statusChangedType[]
}

let ws: WebSocket | null = null

const openHandler = () => {
    subscribers['statusChanged'].forEach(s => s('connected'))
}
const errorHandler = () => {
    subscribers['statusChanged'].forEach(s => s('error'))
    console.error('refresh page')
}
const messageHandler = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers['messageReceived'].forEach(s => s(newMessage))
}

const closeHandler = () => {
    subscribers['statusChanged'].forEach(s => s('pending'))
    setTimeout(createWSChannel, 3000)
}

const cleanUp = () => {
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

function createWSChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    subscribers['statusChanged'].forEach(s => s('pending'))
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
    startWS() {
        createWSChannel()
    },
    stopWS() {
        subscribers['messageReceived'] = []
        subscribers['statusChanged'] = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
    subscribe(eventName: eventNameType, callback: messageReceivedType | statusChangedType | undefined) {
        if (callback !== undefined) {
            // @ts-ignore
            subscribers[eventName].push(callback)
        }
    },
    unSubscribe(eventName: eventNameType, callback: messageReceivedType | statusChangedType | undefined) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

