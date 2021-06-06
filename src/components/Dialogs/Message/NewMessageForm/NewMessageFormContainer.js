import React from "react";
import {addMessageAC, changeMessageAC} from "../../../../redux/Dialods-reducer";
import NewMessageForm from "./NewMessageForm";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import ReduxNewMessageForm from "./NewMessageForm";

let mapStateToProps = (state) => {
    return {
        messageValue : state.dialogs.currentMessage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

let NewMessageFormContainer = connect (mapStateToProps, mapDispatchToProps)(ReduxNewMessageForm)


export default NewMessageFormContainer