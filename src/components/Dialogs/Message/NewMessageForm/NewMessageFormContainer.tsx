import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import NewMessageForm from "./NewMessageForm";
import {DialogsActions, sendMessage} from "../../../../redux/Dialods-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        messageValue: state.dialogs.currentMessage,

    }
}

let NewMessageFormContainer = connect(mapStateToProps, {
    addMessage: DialogsActions.addMessage,
    sendMessage
})(NewMessageForm)


export default NewMessageFormContainer