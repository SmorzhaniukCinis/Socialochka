import React from 'react'
import s from './Logim.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router'

const Login = (props) => {

    let onSubmit = (formData) => {
        props.loginUser(formData.login, formData.password, formData.rememberMe)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login