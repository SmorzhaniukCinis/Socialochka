import React, {useEffect} from 'react';
import s from './Dialog.module.css'
import YourChats from "./YourChats/YourChats";
import {Messages} from "./Message/Messages";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../redux/Selectors/AuthSelectors";
import {useHistory} from "react-router-dom";


export const Dialogs: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const history = useHistory()
    useEffect(() => {
        debugger
        if (!isAuth) {
            history.push({
                pathname: '/login'
            })
        }
    },[])

    return(
        <div className={s.container}>
            <h4 className={s.pageName}>Massages</h4>
            <div className={s.users}>
                <YourChats />
            </div>
            <div className={s.message}>
                <Messages />
            </div>
        </div>
    )
}