import React from 'react'
import UserDialogs from "./UsersDialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs : state.dialogs.DialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let UserDialogsContainer = connect (mapStateToProps, mapDispatchToProps)(UserDialogs)

export default UserDialogsContainer