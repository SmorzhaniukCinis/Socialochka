import React from 'react'
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        message : state.dialogs.messageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let MessagesContainer = connect (mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer