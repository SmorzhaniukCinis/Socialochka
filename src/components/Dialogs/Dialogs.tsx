import React from 'react';
import s from './Dialog.module.css'
import UsersDialogsContainer from "./UsersMassage/UsersDialogsContainer";
import MessagesContainer from "./Message/MessagesContainer";

type props = {

}

const Dialogs: React.FC<props> = (props) => {

    return(
        <div className={s.container}>
            <h4 className={s.pageName}>Massages</h4>
            <div className={s.users}>
                <UsersDialogsContainer />
            </div>
            <div className={s.message}>
                <MessagesContainer />
            </div>
        </div>
    )
}

export default Dialogs