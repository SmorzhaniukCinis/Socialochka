import {AppStateType} from "../redux-store";

export const getChatMessages = (state:AppStateType) => {
    return state.chatPage.chatMessages

}