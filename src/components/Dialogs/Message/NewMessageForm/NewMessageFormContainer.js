import React from "react";
import {addMessageAC, changeMessageAC} from "../../../../redux/Dialods-reducer";
import NewMessageForm from "./NewMessageForm";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        messageValue : state.dialogs.currentMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMessage: (text) => {
            dispatch(changeMessageAC(text))
        },
        onMessageText: () => {
            dispatch(addMessageAC())
        }
    }
}

let NewMessageFormContainer = connect (mapStateToProps, mapDispatchToProps)(NewMessageForm)

export default NewMessageFormContainer