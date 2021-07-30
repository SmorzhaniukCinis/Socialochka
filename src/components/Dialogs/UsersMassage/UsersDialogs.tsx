import React from 'react'
import s from './UsersDialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType} from "../../../Type/Type";



type props = {
    dialogs: Array<DialogsDataType>
}

const UserDialogs: React.FC<props> = (props) => {
    let NewDialogsData = props.dialogs.map ( item => <DialogItem key={item.id} name={item.name} id={item.id}/>)

    return (
        <div className={s.container}>
            <ul>
                {NewDialogsData}
            </ul>
        </div>
    )
}
export default UserDialogs