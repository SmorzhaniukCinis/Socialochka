import {connect} from "react-redux";
import ReduxNewMessageForm from "./NewMessageForm";
import {AppStateType} from "../../../../redux/redux-store";
import NewMessageForm from "./NewMessageForm";
import {DialogsActions} from "../../../../redux/Dialods-reducer";

let mapStateToProps = (state:AppStateType) => {
    return {
        messageValue : state.dialogs.currentMessage,
    }
}

let NewMessageFormContainer = connect (mapStateToProps, {addMessage: DialogsActions.addMessage})(NewMessageForm)


export default NewMessageFormContainer