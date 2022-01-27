import React, {FC, useEffect, useRef, useState} from 'react';
import s from './ChatMessages.module.css'
import {useSelector} from "react-redux";
import {getChatMessages, getLoadingStatus} from "../../../redux/Selectors/ChatSelectors";
import loader from "../../../defaultData/loaderForChat.svg";
import ChatItem from "./ChatItem";


export type chatMessagesType = {
    message: string
    photo: string
    userId: number | null
    userName: string
}

export const ChatMessages: FC = React.memo(() => {
    const chatMessages = useSelector(getChatMessages)
    const loadingStatus = useSelector(getLoadingStatus)
    const messageAnchor = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    useEffect(() => {
        if (isAutoScroll) {
            messageAnchor.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [chatMessages, isAutoScroll])

    const ScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 50) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    return (
        <div className={s.messageBloc} onScroll={ScrollHandler}>
            {
                loadingStatus === 'connected'
                    ? chatMessages.map((item) => <ChatItem key={item.id} messageData={item}/>)
                    : <img className={s.chatLoader} src={loader} alt={'loader'}/>
            }
            <div ref={messageAnchor}/>
        </div>
    )
})
