import React from 'react'
import s from './Messages.module.css'
import {getMessageData} from "../../../redux/Selectors/DialogsSelector";
import {useSelector} from "react-redux";
import {MessageItem} from "./MessageItem/MessageItem";
import {NewMessageForm} from "./NewMessageForm/NewMessageForm";


export const Messages: React.FC = () => {

    const message= useSelector(getMessageData)

    let messages = message.map (item => <MessageItem messageItem={item.messageItem} key={item.id} />)

    return (
        <div className={s.container}>
                {messages}
            <NewMessageForm />
        </div>
    )
}