import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import s from "./ProfileDataForm.module.css"

let ProfileDataForm = (props) => {
    const onSubmit = data => {
        props.updateStatus(data.status)
        props.uploadProfileData(data, props.UserId)
        props.deactivateEditMode()
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return(
        <form className={s.profileDataForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder="Enter your name" defaultValue={props.profile.fullName}{...register("fullName", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input placeholder="Enter your status" defaultValue={props.status} {...register("status")} />
            </div>
            <div>
                <input placeholder="Where are you from?" defaultValue={props.profile.aboutMe}{...register("AboutMe", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                {props.profile.lookingForAJob
                    ?<input type='checkbox' defaultChecked {...register("lookingForAJob")} />
                    :<input type='checkbox'  {...register("lookingForAJob")} />
                }
                <span className={s.jobQuestion}>you are looking for a job?</span>
            </div>
            <div>
                <input placeholder="What job are you looking for?" defaultValue={props.profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} />
            </div>
            <input type="submit" />
        </form>
    )
}



export default ProfileDataForm
