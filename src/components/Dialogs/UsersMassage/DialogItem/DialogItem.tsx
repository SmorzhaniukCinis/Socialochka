import React from 'react'
import {NavLink} from "react-router-dom";

type props ={
    name:string
    id:number
}

const DialogItem:React.FC<props> = (props) => {
    return (
        <div>
            <NavLink to={"/messages/" + props.id}>
                <li><img src="https://i.pinimg.com/originals/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg" alt=""/>
                    <span>{props.name}</span></li>
            </NavLink>
        </div>
    )
}

export default DialogItem