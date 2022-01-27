import React, {useEffect, useState} from 'react';
import s from './ChatPage.module.css'
import {AddChatMessage} from './AddChatMessage/AddChatMessage';
import {ChatMessages} from './ChatMessages/ChatMessages';
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../redux/Chat-reducer";
import {getLoadingStatus} from "../../redux/Selectors/ChatSelectors";


const ChatPage: React.FC = () => {

    const dispatch = useDispatch()
    const connectionStatus = useSelector(getLoadingStatus)


    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {connectionStatus === 'error' && <div>Some error occurred... Please refresh page.</div>}
            <div className={s.container}>
                <ChatMessages/>
                <AddChatMessage/>
            </div>
        </div>
    )
        ;
};
export default ChatPage
