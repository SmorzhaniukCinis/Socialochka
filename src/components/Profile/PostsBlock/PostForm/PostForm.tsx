import s from "../Posts.module.css";
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {ProfileActions} from "../../../../redux/Priofile-reducer";

const PostForm: React.FC = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();

    const dispatch = useDispatch()
    const onSubmit = (data: { PostField: any; }) => {
        dispatch(ProfileActions.addPost(data.PostField))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.fieldWrapper}>

                <textarea placeholder={errors.PostField ? 'Enter you post' : undefined}
                          className={s.newPostField} {...register("PostField", {required: true})} />
            </div>
            <div>
                <button type="submit" disabled={errors.PostField || false} className={s.SendPostButton}>Send post
                </button>
            </div>
        </form>
    )

}
export default PostForm