import React from 'react';
import sendIcon from '../../../defaultData/Icon/send-icon.svg';
import {Button, TextField} from "@material-ui/core";
import s from './AddChatMessage.module.css'
import {useForm} from "react-hook-form";

export const AddChatMessage = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField autoComplete={'off'} {...register("ChatMessage")} className={s.messageField} id="standard-basic"
                            label="Add your message" variant="standard"/>
                <Button type="submit" className={s.sendButton} variant="contained"
                        endIcon={<img src={sendIcon} alt=""/>}>
                    Send
                </Button>
            </form>

        </div>
    );
};

