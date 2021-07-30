import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../redux/Auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type props ={
    isAuth: boolean
    captchaURL: string
    loginUser:(login:string, password:string, rememberMe:boolean, captcha:string) => void
}

class LoginContainer extends React.Component<props> {
    render(){
        return(
            <Login {...this.props} />
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

// @ts-ignore
export default connect (mapStateToProps, {loginUser}) (LoginContainer)