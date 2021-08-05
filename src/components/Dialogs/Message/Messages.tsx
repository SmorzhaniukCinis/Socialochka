import React from 'react'
import s from './Messages.module.css'
import MessageItem from "./MessageItem/MessageItem";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";
import {messageDataType} from "../../../Type/Types";

type props = {
    message: Array<messageDataType>
    addMessageAC: (message:string) => void
}

const Messages: React.FC<props> = (props) => {

    type formDataType = {
        newMessage?: string
    }
    let onSubmit = (formData:formDataType) => {
        if (formData.newMessage != null) {
            props.addMessageAC(formData.newMessage)
        }
    }

    let messages = props.message.map (item => <MessageItem messageItem={item.messageItem} key={item.id} />)

    return (
        <div className={s.container}>
            <ul>
                {messages}
            </ul>
            <NewMessageFormContainer onSubmit={onSubmit}/>
        </div>
    )
}
export default Messages