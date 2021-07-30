import UserDialogs from "./UsersDialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state:AppStateType) => {
    return {
        dialogs : state.dialogs.DialogsData
    }
}

let UserDialogsContainer = connect (mapStateToProps, {})(UserDialogs)

export default UserDialogsContainer