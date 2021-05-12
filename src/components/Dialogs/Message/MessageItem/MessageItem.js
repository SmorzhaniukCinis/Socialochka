import React from 'react'
import s from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div><li>{props.messageItem}</li></div>
    )
}

export default MessageItem