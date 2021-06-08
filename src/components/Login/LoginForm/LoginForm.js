import React from 'react'
import s from '../Logim.module.css'
import { reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../FormsControl/FormsControl";

let maxLength = maxLengthCreator(40)
const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.itemForm}>
                <Field component={Input} validate={[required, maxLength]} name={"login"} className={s.textInput} placeholder={'Login'}/>
            </div>
            <div className={s.itemForm}>
                <Field component={Input} validate={[required, maxLength]} name={"password"} className={s.textInput} placeholder={'Password'}/>
            </div>
            <div className={s.itemForm}>
                <Field component="input"  name={"rememberMe"} className={s.checkbox} type={'checkbox'}/> <span>Remember me</span>
            </div>
            <div className={s.FormSummaryError}>
                {props.error}
            </div>
            <div className={s.itemForm}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

export default LoginReduxForm