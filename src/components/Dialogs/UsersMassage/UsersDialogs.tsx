import React from 'react'
import s from './UsersDialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType} from "../../../Type/Types";



type props = {
    dialogs: Array<DialogsDataType>
    setStartChatting: (userId:number) => void
    getMessage: (userId:number) => void
}

const UserDialogs: React.FC<props> = (props) => {
    let NewDialogsData = props.dialogs.map ( item => <DialogItem {...props} key={item.id} name={item.name} id={item.id}/>)

    return (
        <div className={s.container}>
            <ul >
                {NewDialogsData}
            </ul>
        </div>
    )
}
export default UserDialogs