import {Avatar} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import s from './ChatMessages.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ChatActions} from "../../../redux/Chat-reducer";
import {getChatMessages} from "../../../redux/Selectors/ChatSelectors";


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type chatMessagesType = {
    message: string
    photo:string
    userId: number | null
    userName:string
}

export const ChatMessages = () => {
    const chatMessages =  useSelector(getChatMessages)
    const dispatch = useDispatch()
    useEffect(()=> {
        ws.addEventListener('message', (e)=> {
            dispatch(ChatActions.setChatMessage(JSON.parse(e.data)))
        })
    }, [])

    return (
        <div className={s.messageBloc}>
            {chatMessages.map(item => <ChatItem key={item.userId} messageData={item}/>)}
        </div>
    );
};




type  propsType = {
    messageData:chatMessagesType
}
const ChatItem:React.FC<propsType> = ({messageData}) => {
    return (
        <div className={s.MessageItem}>
            <NavLink to={'/profile'}>
                <Avatar className={s.avatar} alt={messageData.userName} src={messageData.photo}/>
            </NavLink>
            <div>
                <NavLink to={'/profile'} className={s.name}>{messageData.userName}</NavLink><br/>
                <span>{messageData.message}</span>
            </div>
        </div>
    )
}