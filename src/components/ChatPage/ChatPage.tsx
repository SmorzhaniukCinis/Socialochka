import React, {useEffect, useState} from 'react';
import s from './ChatPage.module.css'
import {AddChatMessage} from './AddChatMessage/AddChatMessage';
import {ChatMessages} from './ChatMessages/ChatMessages';
import {useDispatch} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../redux/Chat-reducer";


const ChatPage: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    } , [])

    return (
        <div className={s.container}>
            <ChatMessages />
            <AddChatMessage />
        </div>
    );
};
export default ChatPage
