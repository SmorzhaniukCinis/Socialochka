import React from 'react'
import s from './Logim.module.css'
import {LoginForm} from "./LoginForm/LoginForm";
import {Redirect} from 'react-router'
import {getIsAuth} from "../../redux/Selectors/AuthSelectors";
import {useSelector} from "react-redux";



export const Login: React.FC = () => {

    const isAuth = useSelector(getIsAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1 className={s.title}>Login</h1>
            <LoginForm  />
        </div>
    )
}
