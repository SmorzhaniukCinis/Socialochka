import React, {useEffect} from "react";
import {useForm} from "react-hook-form";


let ProfileDataForm = (props) => {
    // useEffect(
    //     () => {
    //          props.setStatus(props.status)
    //     },
    //     [props.status]
    // )
    const onSubmit = data => {
        props.updateStatus(data.status)
        props.uploadProfileData(data)
        props.deactivateEditMode()
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input defaultValue={props.profile.fullName}{...register("fullName", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input defaultValue={props.profile.AboutMe}{...register("AboutMe", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input defaultValue={props.status} {...register("status")} />
            </div>
            <div>
                <input type='checkbox' defaultValue={props.profile.lookingForAJob} {...register("lookingForAJob")} />
            </div>
            <div>
                <input defaultValue={props.profile.lookingForAJobDescription} {...register("lookingForAJobDescription")} />
            </div>
            <input type="submit" />
        </form>
    )
}



export default ProfileDataForm
