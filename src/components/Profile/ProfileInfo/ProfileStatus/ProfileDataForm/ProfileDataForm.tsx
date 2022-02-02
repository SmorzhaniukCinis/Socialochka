import React, {useState} from "react";
import {useForm} from "react-hook-form";
import s from "./ProfileDataForm.module.css"
import {profileType} from "../../../../../Type/Types";
import {LinkPopover} from "./LinkPopover";
import {useDispatch, useSelector} from "react-redux";
import {updateStatus, uploadProfileData} from "../../../../../redux/Priofile-reducer";
import {getStatus} from "../../../../../redux/Selectors/ProfileSelectors";

type props = {
    profile: profileType
    deactivateEditMode: (EditMode: boolean) => void
}

type FormData = {
    status: string
    fullName: string
    AboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}


export let ProfileDataForm: React.FC<props> = (props) => {

    const dispatch = useDispatch()

    const status = useSelector(getStatus)


    const [youtube, setYoutubeURL] = useState(props.profile.contacts.youtube)
    const [github, setGithubURL] = useState(props.profile.contacts.github)
    const [facebook, setFacebookURL] = useState(props.profile.contacts.facebook)
    const [instagram, setInstagramURL] = useState(props.profile.contacts.instagram)
    const [vk, setVkURL] = useState(props.profile.contacts.vk)
    const [twitter, setTwitterURL] = useState(props.profile.contacts.twitter)
    const [website, setWebsiteURL] = useState(props.profile.contacts.website)


    const onSubmit = (data: FormData) => {
        let formData = {...data, contacts: {github, vk, facebook, instagram, twitter, youtube, website, mainLink: null}}
        dispatch(updateStatus(data.status))
        dispatch(uploadProfileData(formData, props.profile.userId))
        props.deactivateEditMode(false)
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
                           defaultValue={status} {...register("status", {maxLength: 20,})} />
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
                    <input className={errors.lookingForAJobDescription && s.someError}
                           placeholder="What job are you looking for?"
                           defaultValue={props.profile.lookingForAJobDescription}
                           {...register("lookingForAJobDescription", {maxLength: 20, required: true})} />
                    {errors.lookingForAJobDescription &&
                    <span className={s.someErrorMessage}>This field is required</span>}
                </div>
                <div className={s.linkWrapper}>
                    <LinkPopover contactLink={props.profile.contacts.youtube} URL={youtube} setURL={setYoutubeURL}
                                 name={'youtube'} linkTitle={'Click to enter link of your youtube page'}
                                 link={"https://img.icons8.com/metro/30/000000/youtube.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.github} URL={github} setURL={setGithubURL}
                                 name={'github'} linkTitle={'Click to enter link of your github page'}
                                 link={"https://img.icons8.com/metro/30/000000/github.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.facebook} URL={facebook} setURL={setFacebookURL}
                                 name={'facebook'} linkTitle={'Click to enter link of your facebook page'}
                                 link={"https://img.icons8.com/metro/30/000000/facebook-new--v2.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.instagram} URL={instagram} setURL={setInstagramURL}
                                 name={'instagram'} linkTitle={'Click to enter link of your instagram page'}
                                 link={"https://img.icons8.com/metro/30/000000/instagram-new.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.vk} URL={vk} setURL={setVkURL} name={'vk'}
                                 linkTitle={'Click to enter link of your vk page'}
                                 link={"https://img.icons8.com/metro/30/000000/vk-com--v1.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.twitter} URL={twitter} setURL={setTwitterURL}
                                 name={'twitter'} linkTitle={'Click to enter link of your twitter page'}
                                 link={"https://img.icons8.com/metro/30/000000/twitter.png"}/>
                    <LinkPopover contactLink={props.profile.contacts.website} URL={website} setURL={setWebsiteURL}
                                 name={'website'} linkTitle={'Click to enter link of your personal site'}
                                 link={"https://img.icons8.com/metro/30/000000/google-code.png"}/>
                </div>
                <button className={s.submit} type="submit">Save changes</button>
            </div>
        </form>
    )
}


