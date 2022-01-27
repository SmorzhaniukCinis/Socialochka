import * as _ from 'lodash';
import {InferActionsTypes} from "./redux-store";
import {chatMessagesType} from "../components/ChatPage/ChatMessages/ChatMessages";
import {Dispatch} from "redux";
import {chatAPI} from "../api/chatAPI";
import {v1} from 'uuid'

type initialStateType = {
    chatMessages: Array<chatMessagesType & { id: string }>
    connectionStatus: 'pending' | 'connected' | 'error'
}
let initialState: initialStateType = {
    chatMessages: [],
    connectionStatus: 'pending'
}

const chatReducer = (state = initialState, action: ActionTypes): initialStateType => {
    let stateClone = _.cloneDeep(state)
    switch (action.type) {
        case "SET_CHAT_MESSAGES" :
            stateClone.chatMessages = [...stateClone.chatMessages, ...action.messages.map(m => ({
                ...m,
                id: v1()
            }))].filter((m,index, array) =>
                index >= array.length - 100
            )
            return stateClone
        case "SET_CHAT_LOADING" :
            stateClone.connectionStatus = action.loadingStatus
            return stateClone
        default:
            return state
    }

}

type ActionTypes = InferActionsTypes<typeof ChatActions>

export const ChatActions = {
    setChatMessage: (messages: Array<chatMessagesType>) => ({type: "SET_CHAT_MESSAGES", messages} as const),
    setConnectionStatus: (loadingStatus: 'pending' | 'connected' | 'error') => ({
        type: "SET_CHAT_LOADING",
        loadingStatus
    } as const),
}

let _newMessageHandler: ((messages: chatMessagesType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch<ActionTypes>) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(ChatActions.setChatMessage(messages))
        }
        return _newMessageHandler
    }
}
let _statusChangedHandler: ((status: 'pending' | 'connected' | 'error') => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch<ActionTypes>) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(ChatActions.setConnectionStatus(status))
        }
        return _statusChangedHandler
    }
}


export const startMessagesListening = () => async (dispatch: Dispatch<ActionTypes>) => {
    chatAPI.startWS()
    chatAPI.subscribe('messageReceived', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('statusChanged', statusChangedHandlerCreator(dispatch))
    dispatch(ChatActions.setConnectionStatus('connected'))
}
export const stopMessagesListening = () => async (dispatch: Dispatch<ActionTypes>) => {
    chatAPI.unSubscribe('messageReceived', newMessageHandlerCreator(dispatch))
    chatAPI.unSubscribe('statusChanged', statusChangedHandlerCreator(dispatch))
}
export const sendMessage = (message: string) => async () => {
    chatAPI.sendMessage(message)
}

export default chatReducer