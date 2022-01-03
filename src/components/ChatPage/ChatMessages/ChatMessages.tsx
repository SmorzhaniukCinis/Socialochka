import {Avatar} from '@material-ui/core';
import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import s from './ChatMessages.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ChatActions} from "../../../redux/Chat-reducer";
import {getChatMessages} from "../../../redux/Selectors/ChatSelectors";
import loader from "../../../defaultData/loaderForChat.svg";




export type chatMessagesType = {
    message: string
    photo:string
    userId: number | null
    userName:string
}

export const ChatMessages:FC<{socket:WebSocket | null}> = ({socket}) => {
    const chatMessages =  useSelector(getChatMessages)
    const dispatch = useDispatch()
    const [loading, setLoading] =   useState(true)


    useEffect(()=> {
        socket?.addEventListener('message', (e)=> {

            dispatch(ChatActions.setChatMessage(JSON.parse(e.data)))
            setLoading(false)
            // @ts-ignore
            document.getElementById('messageBlocID').scrollTop = 9999

        })

        // @ts-ignore
        document.getElementById('messageBlocID').scrollTop = 9999

    }, [socket])

    useEffect(()=>{
        setLoading(false)
        // @ts-ignore
        document.getElementById('messageBlocID').scrollTop = 9999
    },[loading])


    return (
        <div id='messageBlocID' className={s.messageBloc}>
            {!loading
                ?chatMessages.map((item , index) => <ChatItem key={index} messageData={item}/>)
                :<img className={s.chatLoader} src={loader} alt={'loader'}/>}
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