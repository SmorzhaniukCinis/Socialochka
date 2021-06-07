import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser, logoutUser} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, {logoutUser,authUser})(HeaderContainer)