import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessageAC} from "../../../redux/Dialods-reducer";


let mapStateToProps = (state) => {
    return {
        message : state.dialogs.messageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        pushMessage: (text) => {
            dispatch(addMessageAC(text))
        }
    }
}

let MessagesContainer = connect (mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer