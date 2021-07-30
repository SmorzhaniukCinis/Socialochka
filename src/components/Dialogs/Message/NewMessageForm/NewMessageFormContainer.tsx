import {connect} from "react-redux";
import ReduxNewMessageForm from "./NewMessageForm";
import {AppStateType} from "../../../../redux/redux-store";

let mapStateToProps = (state:AppStateType) => {
    return {
        messageValue : state.dialogs.currentMessage,
    }
}

let NewMessageFormContainer = connect (mapStateToProps, {})(ReduxNewMessageForm)


export default NewMessageFormContainer