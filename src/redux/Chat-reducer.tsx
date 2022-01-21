import * as _ from 'lodash';
import {InferActionsTypes} from "./redux-store";
import {chatMessagesType} from "../components/ChatPage/ChatMessages/ChatMessages";
import {Dispatch} from "redux";
import {chatAPI} from "../api/chatAPI";

type initialStateType = {
    chatMessages: Array<chatMessagesType>
}
let initialState: initialStateType = {
    chatMessages: []
}


const chatReducer = (state = initialState, action: ActionTypes): initialStateType => {
    let stateClone = _.cloneDeep(state)
    switch (action.type) {
        case "SET_CHAT_MESSAGES" :
            stateClone.chatMessages = [...stateClone.chatMessages, ...action.messages]
            return stateClone
        default:
            return state
    }

}

type ActionTypes = InferActionsTypes<typeof ChatActions>

export const ChatActions = {
    setChatMessage: (messages: Array<chatMessagesType>) => ({type: "SET_CHAT_MESSAGES", messages} as const),
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


export const startMessagesListening = () => async (dispatch: Dispatch<ActionTypes>) => {
    chatAPI.startWS()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = () => async (dispatch: Dispatch<ActionTypes>) => {
    chatAPI.unSubscribe(newMessageHandlerCreator(dispatch))
}
export const sendMessage = (message:string) => async (dispatch: Dispatch<ActionTypes>) => {
    chatAPI.sendMessage(message)
}

export default chatReducer