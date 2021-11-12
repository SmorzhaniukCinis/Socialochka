import React from 'react';
import s from './ChatPage.module.css'
import { AddChatMessage } from './AddChatMessage/AddChatMessage';
import { ChatMessages } from './ChatMessages/ChatMessages';

export const ChatPage: React.FC = () => {
    return (
        <div style={ {marginBottom: '30px'}} className={s.container}>
            <ChatMessages/>
            <AddChatMessage/>
        </div>
    );
};
