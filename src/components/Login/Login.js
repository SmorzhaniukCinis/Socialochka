import React from 'react'
import s from './Logim.module.css'
import { reduxForm, Field} from "redux-form";

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

const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.itemForm}>
                <Field component={'input'} name={"login"} className={s.textInput} placeholder={'Login'}/>
            </div>
            <div className={s.itemForm}>
                <Field component={'input'} name={"password"} className={s.textInput} placeholder={'Password'}/>
            </div>
            <div className={s.itemForm}>
                <Field component={'input'} name={"rememberMe"} className={s.checkbox} type={'checkbox'}/> <span>Remember me</span>
            </div>
            <div className={s.itemForm}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

export default Login