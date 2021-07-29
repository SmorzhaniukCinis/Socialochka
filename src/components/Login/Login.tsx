import React from 'react'
import s from './Logim.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router'

const Login = (props) => {

    let onSubmit = (formData) => {
        props.loginUser(formData.login, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit} />
        </div>
    )
}


export default Login