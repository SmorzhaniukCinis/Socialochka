import Messages from "./Messages";
import {connect} from "react-redux";
import {DialogsActions} from "../../../redux/Dialods-reducer";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state:AppStateType) => {
    return {
        message : state.dialogs.messageData
    }
}

let MessagesContainer = connect (mapStateToProps, {addMessageAC:DialogsActions.addMessageAC})(Messages)

export default MessagesContainer