import React from 'react'
import s from './Messages.module.css'
import MessageItem from "./MessageItem/MessageItem";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";
import {messageDataType} from "../../../Type/Types";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

type props = {
    message: Array<messageDataType>
}

const Messages: React.FC<props> = (props) => {


    let messages = props.message.map (item => <MessageItem messageItem={item.messageItem} key={item.id} />)

    return (
        <div className={s.container}>
                {messages}
            <NewMessageFormContainer />
        </div>
    )
}
export default Messages