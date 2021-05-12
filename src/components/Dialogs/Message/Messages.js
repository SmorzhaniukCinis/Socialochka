import React from 'react'
import s from './Messages.module.css'
import MessageItem from "./MessageItem/MessageItem";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";



const Messages = (props) => {

    let messages = props.message.map (item => <MessageItem messageItem={item.messageItem} key={item.id} />)

    return (
        <div className={s.container}>
            <ul>
                {messages}
            </ul>
            <NewMessageFormContainer store={props.store}/>
        </div>
    )
}
export default Messages