import React from 'react'
import s from './MessageItem.module.css'

type props = {
    messageItem:string
}

const MessageItem: React.FC<props> = (props) => {
    return (
        <div><li>{props.messageItem}</li></div>
    )
}

export default MessageItem