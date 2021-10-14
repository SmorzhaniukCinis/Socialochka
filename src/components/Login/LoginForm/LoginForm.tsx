import React from 'react'
import s from '../Logim.module.css'
import {useForm} from "react-hook-form";
import {getCaptchaURL} from "../../../redux/Selectors/AuthSelectors";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../../redux/Auth-reducer";


export const LoginForm: React.FC = () => {

    const captchaURL = useSelector(getCaptchaURL)
    const dispatch = useDispatch()


    const {register, handleSubmit, formState: {errors}} = useForm();

    type data = { login: string, password: string, rememberMe: boolean, captcha: string }
    const onSubmit = (data: data) => {
        dispatch(loginUser(data.login, data.password, data.rememberMe, data.captcha))
    }

    return(
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
            < div className={s.itemForm}>
                <input type={'email'} placeholder={'Login'} className={s.textInput} {...register("login", {
                    required: true,
                    maxLength: 50,
                    minLength: 5
                })} />
                {errors.login?.type === 'required' && <span>Field is required</span>}
                {errors.login?.type === 'maxLength' && <span>Max length is 50 letters</span>}
                {errors.login?.type === 'minLength' && <span>Max length is 5 letters</span>}
            </div>
            <div className={s.itemForm}>
                <input type={'password'} placeholder={'Password'} className={s.textInput} {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                })} />
                {errors.login?.type === 'required' && <span>Field is required</span>}
                {errors.login?.type === 'maxLength' && <span>Max length is 20 letters</span>}
                {errors.login?.type === 'minLength' && <span>Max length is 5 letters</span>}
            </div>
            <div className={s.itemForm}>
                <input className={s.checkbox} type={'checkbox'} defaultValue="test" {...register("rememberMe")} />
                <span>Remember me</span>
            </div>
            <div className={s.captchaContainer}>
                {captchaURL && <img className={s.captcha} src={captchaURL} alt=""/>}
            </div>
            <div className={s.itemForm}>
                {captchaURL &&
                <input className={s.textInput}
                        {...register("captcha", {required: true})} />
                }
                {errors.captcha && <span>This field is required</span>}
            </div>
            <div className={s.itemForm}>
                <input className={s.submitButton} type="submit"/>
            </div>
        </form>
    )
}
