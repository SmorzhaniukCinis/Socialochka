import React, {useEffect, useState} from 'react';
import s from './ChatPage.module.css'
import {AddChatMessage} from './AddChatMessage/AddChatMessage';
import {ChatMessages} from './ChatMessages/ChatMessages';


const ChatPage: React.FC = () => {

    const [socket, setSocket] = useState<WebSocket | null>(null)

    useEffect(() => {
        function createWSChannel() {
            let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', () => {
                debugger
                setTimeout(createWSChannel, 3000)
            })
            setSocket(ws)
        }

        createWSChannel()
    }, [])

    return (
        <div className={s.container}>
            <ChatMessages socket={socket}/>
            <AddChatMessage socket={socket}/>
        </div>
    );
};
export default ChatPage
