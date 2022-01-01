import React, {useEffect, useState} from 'react';
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

    const [connectStatus, setConnectStatus] =   useState<'pending' | 'connected'>('pending')



    useEffect(()=>{
        socket.addEventListener('open' , ()=> {
            setConnectStatus('connected')
        })
    }, [])

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField   autoComplete={'off'} {...register("ChatMessage",{ required: true })} className={s.messageField} id="standard-basic"
                            label="Add your message" variant="standard"/>
                <Button disabled={connectStatus !== 'connected'} type="submit" className={s.sendButton} variant="contained"
                        endIcon={<img src={sendIcon} alt=""/>}>
                    Send
                </Button>
            </form>

        </div>
    );
};

