import React from 'react'
import s from './YourChats.module.css'
import ChatItem from "./DialogItem/ChatItem";
import {useSelector} from "react-redux";
import {getDialogsData} from "../../../redux/Selectors/DialogsSelector";


const UserDialogs: React.FC = () => {
    const dialogs = useSelector(getDialogsData)

    let NewDialogsData = dialogs.map ( item => <ChatItem key={item.id} name={item.name} id={item.id}/>)

    return (
        <div className={s.container}>
            <ul >
                {NewDialogsData}
            </ul>
        </div>
    )
}
export default UserDialogs