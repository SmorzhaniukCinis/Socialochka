import {Field, reduxForm} from "redux-form";
import s from "../Posts.module.css";
import React from "react";
import { useForm } from "react-hook-form";


const PostForm = (props) => {
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.addPost(data.PostField)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.fieldWrapper}>
                <textarea placeholder={errors.PostField ? 'Enter you post' : null} className={s.newPostField} {...register("PostField", { required: true })} />
            </div>
            <div>
                <button type="submit" disabled={errors.PostField || false} className={s.SendPostButton}>Send post</button>
            </div>
        </form>
    )

}
export default PostForm