import UserDialogs from "./UsersDialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getMessage, setStartChatting} from "../../../redux/Dialods-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogs.DialogsData
    }
}

let UserDialogsContainer = connect(mapStateToProps, {setStartChatting, getMessage})(UserDialogs)

export default UserDialogsContainer