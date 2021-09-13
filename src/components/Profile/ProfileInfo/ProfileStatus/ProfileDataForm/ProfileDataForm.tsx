import React from "react";
import {useForm} from "react-hook-form";
import s from "./ProfileDataForm.module.css"
import {profileType} from "../../../../../Type/Types";
import LinkPopover from "./LinkPopover";

type props = {
    profile:profileType
    status:string
    UserId:number
    updateStatus: (status:string) => void
    uploadProfileData: (data:FormData, UserId:number) => void
    deactivateEditMode: () => void
}

type FormData = {
    status: string
    fullName: string
    AboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}

let ProfileDataForm:React.FC<props> = (props) => {
    const onSubmit = (data:FormData) => {
        props.updateStatus(data.status)
        props.uploadProfileData(data, props.UserId)
        props.deactivateEditMode()
    }

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form className={s.profileDataForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
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
                <div className={s.linkWrapper}>
                    <LinkPopover linkTitle={'Click to enter link of your youtube page'} link={"https://img.icons8.com/metro/30/000000/youtube.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your github page'} link={"https://img.icons8.com/metro/30/000000/github.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your facebook page'} link={"https://img.icons8.com/metro/30/000000/facebook-new--v2.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your instagram page'} link={"https://img.icons8.com/metro/30/000000/instagram-new.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your vk page'} link={"https://img.icons8.com/metro/30/000000/vk-com--v1.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your twitter page'} link={"https://img.icons8.com/metro/30/000000/twitter.png"} />
                    <LinkPopover linkTitle={'Click to enter link of your personal site'} link={"https://img.icons8.com/metro/30/000000/google-code.png"} />
                </div>
                <button className={s.submit} type="submit">Save changes</button>
            </div>
        </form>
    )
}


export default ProfileDataForm
