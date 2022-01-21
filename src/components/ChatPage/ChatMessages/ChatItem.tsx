import {Avatar} from '@material-ui/core';
import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './ChatMessages.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ChatActions} from "../../../redux/Chat-reducer";
import {getChatMessages} from "../../../redux/Selectors/ChatSelectors";
import loader from "../../../defaultData/loaderForChat.svg";
import {chatMessagesType} from "./ChatMessages";



type  propsType = {
    messageData:chatMessagesType
}
const ChatItem:React.FC<propsType> = ({messageData}) => {

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
        <div className={s.MessageItem} onClick={()=>goToUserProfile(messageData.userId as number)}>
            <div >
                <Avatar className={s.avatar} alt={messageData.userName} src={messageData.photo}/>
            </div>
            <div>
                <div  className={s.name}>{messageData.userName}</div><br/>
                <span>{messageData.message}</span>
            </div>
        </div>
    )
}

export default ChatItem