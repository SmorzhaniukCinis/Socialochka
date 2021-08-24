import {DialogsDataType, messageDataType} from "../Type/Types";
import {InferActionsTypes} from "./redux-store";

type initialStateType = {
    messageData: Array<messageDataType>
    DialogsData: Array<DialogsDataType>
    currentMessage: string
}

let initialState: initialStateType = {
    messageData: [
        {id: 1, messageItem: "1 messageItem"},
        {id: 2, messageItem: "2 messageItem"},
        {id: 3, messageItem: "3 messageItem"},
        {id: 4, messageItem: "4 messageItem"},
        {id: 5, messageItem: "5 messageItem"}
    ],
    DialogsData: [
        {
            id: 1,
            name: 'dima',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 2,
            name: 'ivan',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 3,
            name: 'jura',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
        {
            id: 4,
            name: 'sasha',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU'
        },
    ],
    currentMessage: ''
}

const dialogsReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, messageItem: action.text}],
                currentMessage: ''
            }
        default:
            return state
    }
}


type ActionTypes = InferActionsTypes<typeof DialogsActions>


export const DialogsActions = {
    addMessage: (text: string) => ({type: "ADD_MESSAGE", text} as const)

}

export default dialogsReducer