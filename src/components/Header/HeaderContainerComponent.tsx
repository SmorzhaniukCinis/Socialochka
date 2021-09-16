import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/Auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type props = {
    avatar: string
    id: number | null
    login: string | null
    email: string | null
    logoutUser: () => void
}

class HeaderContainer extends React.Component<props> {


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    avatar: state.auth.userPhoto
})

// @ts-ignore
export default connect(mapStateToProps, {logoutUser})(HeaderContainer)