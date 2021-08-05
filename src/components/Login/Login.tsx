import React from 'react'
import s from './Logim.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";
import {Redirect} from 'react-router'

type props = {
    loginUser:(login:string, password:string, rememberMe:boolean, captcha:string) => void
    isAuth: boolean
    captchaURL: string
}

type formData = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
const Login: React.FC<props> = (props) => {

    let onSubmit = (formData:formData) => {
        props.loginUser(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1 className={s.title}>Login</h1>
            {/*@ts-ignore*/}
            <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit} />
        </div>
    )
}


export default Login