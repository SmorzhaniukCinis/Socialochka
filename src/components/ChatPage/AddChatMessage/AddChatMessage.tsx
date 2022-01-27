import React, {FC, useEffect, useState} from 'react';
import sendIcon from '../../../defaultData/Icon/send-icon.svg';
import {Button, TextField} from "@material-ui/core";
import s from './AddChatMessage.module.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/Chat-reducer";
import {getLoadingStatus} from "../../../redux/Selectors/ChatSelectors";

export const AddChatMessage:FC = () => {
    const dispatch = useDispatch()
    const connectionStatus  = useSelector(getLoadingStatus)
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data: {ChatMessage:string}) => {
        dispatch(sendMessage(data.ChatMessage))
        reset();
    }



    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField   autoComplete={'off'} {...register("ChatMessage",{ required: true })} className={s.messageField} id="standard-basic"
                            label="Add your message" variant="standard"/>
                <Button disabled={connectionStatus !== 'connected'} type="submit" className={s.sendButton} variant="contained"
                        endIcon={<img src={sendIcon} alt=""/>}>
                    Send
                </Button>
            </form>

        </div>
    );
};

