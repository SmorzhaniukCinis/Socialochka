import s from "../Posts.module.css";
import React from "react";
import {useForm} from "react-hook-form";

type props = {
    addPost: (text: string) => void
}

const PostForm: React.FC<props> = (props) => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data: { PostField: any; }) => {
        props.addPost(data.PostField)
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