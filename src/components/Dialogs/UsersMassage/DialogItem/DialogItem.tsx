import React from 'react'
import {NavLink} from "react-router-dom";

type props ={
    name:string
    id:number
    setStartChatting: (userId:number) => void
}

const DialogItem:React.FC<props> = (props) => {
    return (
        <div onClick={()=> {props.setStartChatting(props.id)}}>
            <NavLink to={"/messages/" + props.id}>
                <li><img src="https://i.pinimg.com/originals/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg" alt=""/>
                    <span>{props.name}</span></li>
            </NavLink>
        </div>
    )
}

export default DialogItem