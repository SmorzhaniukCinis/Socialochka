import {Avatar} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ChatMessages.module.css'


export const ChatMessages = () => {

    const message = [1, 2, 3, 4, 5]
    return (
        <div className={s.messageBloc}>
            {message.map(item => <ChatItem/>)}
            {message.map(item => <ChatItem/>)}
            {message.map(item => <ChatItem/>)}
            {message.map(item => <ChatItem/>)}
            {message.map(item => <ChatItem/>)}
            {message.map(item => <ChatItem/>)}
        </div>
    );
};
const ChatItem = () => {
    const messageItem = {
        ava: 's',
        name: 'dima',
        body: 'dasfasdfasdf'
    }
    return (
        <div className={s.MessageItem}>
            <NavLink to={'/profile'}>
                <Avatar className={s.avatar} alt={messageItem.name} src={messageItem.ava}/>
            </NavLink>
            <div>
                <NavLink to={'/profile'} className={s.name}>{messageItem.name}</NavLink><br/>
                <span>{messageItem.body}</span>
            </div>
        </div>
    )
}