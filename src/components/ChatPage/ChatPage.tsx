import React from 'react';
import s from './ChatPage.module.css'
import { AddChatMessage } from './AddChatMessage/AddChatMessage';
import { ChatMessages } from './ChatMessages/ChatMessages';

 const ChatPage: React.FC = () => {
    return (
        <div className={s.container}>
            <ChatMessages/>
            <AddChatMessage/>
        </div>
    );
};
export default ChatPage
