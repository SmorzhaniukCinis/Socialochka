import React from 'react'
import s from './UsersDialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";





const UserDialogs = (props) => {
    let NewDialogsData = props.dialogs.map ( item => <DialogItem name={item.name} id={item.id}/>)

    return (
        <div className={s.container}>
            <ul>
                {NewDialogsData}
            </ul>
        </div>
    )
}
export default UserDialogs