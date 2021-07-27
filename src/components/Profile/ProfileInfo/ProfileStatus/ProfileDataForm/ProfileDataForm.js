import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import s from "./ProfileDataForm.module.css"

let ProfileDataForm = (props) => {
    const onSubmit = data => {
        props.updateStatus(data.status)
        props.uploadProfileData(data, props.UserId)
        props.deactivateEditMode()
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    return (
        <form className={s.profileDataForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder="Enter your name" className={errors.fullName && s.someError}
                       defaultValue={props.profile.fullName}{...register("fullName", {
                    minLength: 1,
                    maxLength: 20,
                    required: true
                })} />
                {errors.fullName && <span className={s.someErrorMessage}>This field is required</span>}
            </div>
            <div>
                <input placeholder="Enter your status"
                       defaultValue={props.status} {...register("status", {maxLength: 20,})} />
            </div>
            <div>
                <input placeholder="Where are you from?" className={errors.AboutMe && s.someError}
                       defaultValue={props.profile.aboutMe}{...register("AboutMe", {
                    required: true,
                    maxLength: 20
                })} />
                {errors.AboutMe && <span className={s.someErrorMessage}>This field is required</span>}
            </div>
            <div>
                {props.profile.lookingForAJob
                    ? <input type='checkbox' defaultChecked {...register("lookingForAJob")} />
                    : <input type='checkbox'  {...register("lookingForAJob")} />
                }
                <span className={s.jobQuestion}>you are looking for a job?</span>
            </div>
            <div>
                <input className={errors.lookingForAJobDescription && s.someError} placeholder="What job are you looking for?"
                       defaultValue={props.profile.lookingForAJobDescription}
                       {...register("lookingForAJobDescription", {maxLength: 20, required: true})} />
                {errors.lookingForAJobDescription && <span className={s.someErrorMessage}>This field is required</span>}
            </div>
            <button className={s.submit} type="submit">Save changes</button>
        </form>
    )
}


export default ProfileDataForm
