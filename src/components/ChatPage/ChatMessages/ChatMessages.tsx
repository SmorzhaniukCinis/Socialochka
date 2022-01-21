import {Avatar} from '@material-ui/core';
import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './ChatMessages.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ChatActions} from "../../../redux/Chat-reducer";
import {getChatMessages, getLoadingStatus} from "../../../redux/Selectors/ChatSelectors";
import loader from "../../../defaultData/loaderForChat.svg";
import ChatItem from "./ChatItem";




export type chatMessagesType = {
    message: string
    photo:string
    userId: number | null
    userName:string
}

export const ChatMessages:FC = () => {
    const chatMessages =  useSelector(getChatMessages)
    const loadingStatus =  useSelector(getLoadingStatus)


    useEffect(()=> {
        // @ts-ignore
        document.getElementById('messageBlocID').scrollTop = 99999
    },[chatMessages])


    return (
        <div id='messageBlocID' className={s.messageBloc}>
            {!loadingStatus
                ?chatMessages.map((item , index) => <ChatItem key={index} messageData={item}/>)
                :<img className={s.chatLoader} src={loader} alt={'loader'}/>}
        </div>
    );
};
