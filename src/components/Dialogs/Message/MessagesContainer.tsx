import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessageAC} from "../../../redux/Dialods-reducer";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state:AppStateType) => {
    return {
        message : state.dialogs.messageData
    }
}

let MessagesContainer = connect (mapStateToProps, {addMessageAC})(Messages)

export default MessagesContainer