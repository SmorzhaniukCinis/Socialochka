import React from 'react';
import s from './Dialog.module.css'
import YourChats from "./YourChats/YourChats";
import {Messages} from "./Message/Messages";


export const Dialogs: React.FC = () => {

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