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
                <input defaultValue={props.profile.fullName}{...register("fullName", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input defaultValue={props.profile.aboutMe}{...register("AboutMe", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input defaultValue={props.status} {...register("status")} />
            </div>
            <div>
                {props.profile.lookingForAJob
                    ?<input type='checkbox' defaultChecked {...register("lookingForAJob")} />
                    :<input type='checkbox'  {...register("lookingForAJob")} />
                }
                <span className={s.jobQuestion}>you are looking for a job?</span>
            </div>
            <div>
                <input defaultValue={props.profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} />
            </div>
            <input type="submit" />
        </form>
    )
}



export default ProfileDataForm
