import React from 'react';
import sendIcon from '../../../defaultData/Icon/send-icon.svg';
import {Button, TextField} from "@material-ui/core";
import s from './AddChatMessage.module.css'
import {useForm} from "react-hook-form";
import {socket} from "../ChatMessages/ChatMessages";

export const AddChatMessage = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data: {ChatMessage:string}) => {
        socket.send(data.ChatMessage)
        reset();
    }

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField   autoComplete={'off'} {...register("ChatMessage",{ required: true })} className={s.messageField} id="standard-basic"
                            label="Add your message" variant="standard"/>
                <Button type="submit" className={s.sendButton} variant="contained"
                        endIcon={<img src={sendIcon} alt=""/>}>
                    Send
                </Button>
            </form>

        </div>
    );
};

