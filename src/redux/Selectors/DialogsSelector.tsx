import {AppStateType} from "../redux-store";

export const getDialogsData = (state:AppStateType) => {
    return state.dialogs.DialogsData
}
export const getMessageData = (state:AppStateType) => {
    return  state.dialogs.messageData
}