import React from "react";
import s from './NewMessageForm.module.css'
import {useForm} from "react-hook-form";
import errorIcon from "../../../../defaultData/Icon/errorIcon.png"
import {useDispatch} from "react-redux";
import {DialogsActions, sendMessage} from "../../../../redux/Dialods-reducer";



export const NewMessageForm: React.FC = () => {
    const dispatch = useDispatch()
    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: { message: string }) => {
        dispatch(DialogsActions.addMessage(data.message))
        dispatch(sendMessage( 2 , data.message))
        reset()
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <textarea className={s.sendMessageForm}
                          placeholder={'Enter your message...'}  {...register("message", {required: true})} />
            </div>
            <input disabled={!!errors.message} className={s.sendMessageButton} type="submit"/>
            {errors.message &&
            <div className={s.errorMessage}>
                <img className={s.errorIcon} src={errorIcon} alt=""/>
                <span>Field for message cant`t be empty</span>
            </div>}
        </form>
    )
}
