import React from 'react';
import s from './Dialog.module.css'
import UsersDialogsContainer from "./UsersMassage/UsersDialogsContainer";
import MessagesContainer from "./Message/MessagesContainer";

const Dialogs = (props) => {
    return(
        <div className={s.container}>
            <h4 className={s.pageName}>Massages</h4>
            <div className={s.users}>
                <UsersDialogsContainer store={props.store}/>
            </div>
            <div className={s.message}>
                <MessagesContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Dialogs