import {AppStateType} from "../redux-store";

export const getChatMessages = (state:AppStateType) => {
    return state.chatPage.chatMessages

}
export const getLoadingStatus = (state:AppStateType) => {
    return state.chatPage.loadingStatus

}