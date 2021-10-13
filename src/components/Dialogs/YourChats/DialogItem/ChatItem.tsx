import React from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMessage, setStartChatting} from "../../../../redux/Dialods-reducer";

type props ={
    name:string
    id:number
}

const ChatItem:React.FC<props> = (props) => {
    const dispatch = useDispatch()
    return (
        <div onClick={()=> {
            dispatch(setStartChatting(props.id))
            dispatch(getMessage(props.id))
        }}>
            <NavLink to={"/messages/" + props.id}>
                <li><img src="https://i.pinimg.com/originals/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg" alt=""/>
                    <span>{props.name}</span></li>
            </NavLink>
        </div>
    )
}

export default ChatItem