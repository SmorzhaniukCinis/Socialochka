import {AppStateType} from "../redux-store";

export const getIsPopup = (state:AppStateType) => {
    return state.InitialApp.isPopup
}