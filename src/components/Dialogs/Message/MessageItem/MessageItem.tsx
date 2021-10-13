import React from 'react'
import s from './MessageItem.module.css'

type props = {
    messageItem:string
}

export const MessageItem: React.FC<props> = (props) => {
    return (
        <div className={s.messageContainer}><span>{props.messageItem}</span></div>
    )
}
