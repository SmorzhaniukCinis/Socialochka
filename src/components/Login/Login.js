import React from 'react'
import s from './Logim.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {

    let onSubmit = (formData) => {
        console.log(formData)
    }

    return (<div>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login