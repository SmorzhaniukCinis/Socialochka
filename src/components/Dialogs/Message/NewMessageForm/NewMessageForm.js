import React from "react";
import s from './NewMessageForm.module.css'


const NewMessageForm = (props) => {

    let MessageText = () => {
        props.onMessageText()
    }

    let updateMessage = (e) => {
        let text = e.target.value
        props.onUpdateMessage(text)
    }

    return (

        <div className={s.container}>
            <div>
                <textarea className={s.sendMessageForm} onChange={updateMessage} value={props.messageValue}/>
            </div>
            <button className={s.sendMessageButton} onClick={MessageText}>Send</button>
        </div>
    )
}

export default NewMessageForm