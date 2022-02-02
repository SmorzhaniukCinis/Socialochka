import React, {useEffect} from 'react'
import s from './Logim.module.css'
import {LoginForm} from "./LoginForm/LoginForm";
import {Redirect} from 'react-router'
import {getIsAuth} from "../../redux/Selectors/AuthSelectors";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";



export const Login: React.FC = () => {

    const isAuth = useSelector(getIsAuth)
    const history = useHistory()
    if (isAuth) {
        history.push('/profile')
    }

    useEffect(()=> {
            if (!isAuth) {
                history.push('/login')
            }

        }
    , [isAuth])
    return (<div>
            <h1 className={s.title}>Login</h1>
            <LoginForm  />
        </div>
    )
}
