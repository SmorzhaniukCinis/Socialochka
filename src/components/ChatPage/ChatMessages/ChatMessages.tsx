import {Avatar} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import s from './ChatMessages.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ChatActions} from "../../../redux/Chat-reducer";
import {getChatMessages} from "../../../redux/Selectors/ChatSelectors";


const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

socket.onmessage = function(event) {
    alert(`[message] Данные получены с сервера: ${event.data}`);
};
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
        socket.addEventListener('message', (e)=> {
            console.log(e.data)
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