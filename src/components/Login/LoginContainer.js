import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../redux/Auth-reducer";


class LoginContainer extends    React.Component {
    render(){
        return(
            <Login {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {loginUser}) (LoginContainer)