import * as _ from 'lodash';
import {InferActionsTypes} from "./redux-store";
import {chatMessagesType} from "../components/ChatPage/ChatMessages/ChatMessages";

type initialStateType = {
    chatMessages: Array<chatMessagesType>
}
let initialState: initialStateType = {
    chatMessages: [

    ]
}


const chatReducer = (state = initialState, action: ActionTypes): initialStateType => {
    let stateClone = _.cloneDeep(state)
    switch (action.type) {
        case "SET_CHAT_MESSAGES" :
            stateClone.chatMessages = [...stateClone.chatMessages , ...action.messages]
            return stateClone
        default:
            return state
    }

}

type ActionTypes = InferActionsTypes<typeof ChatActions>

export const ChatActions = {
    setChatMessage: (messages: Array<chatMessagesType>) => ({type: "SET_CHAT_MESSAGES", messages} as const),
}

export default chatReducer