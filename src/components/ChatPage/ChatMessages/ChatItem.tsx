import {Avatar} from '@material-ui/core';
import React from 'react';
import {useHistory} from 'react-router-dom';
import s from './ChatMessages.module.css'
import {chatMessagesType} from "./ChatMessages";


type  propsType = {
    messageData: chatMessagesType
}

const ChatItem: React.FC<propsType> = React.memo (({messageData}) => {

    const history = useHistory()
    const goToUserProfile = (id: number) => {
        history.push(
            {
                pathname: '/profile',
                search: `?id=${id}`
            }
        )
    }


    return (
        <div className={s.MessageItem}>
            <div onClick={() => goToUserProfile(messageData.userId as number)}>
                <Avatar className={s.avatar} alt={messageData.userName} src={messageData.photo}/>
            </div>
            <div>
                <div onClick={() => goToUserProfile(messageData.userId as number)}
                     className={s.name}>{messageData.userName}</div>
                <br/>
                <span>{messageData.message}</span>
            </div>
        </div>
    )
})

export default ChatItem