import React from "react";
import s from './FormsControl.module.css'



export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched &&  meta.error

    return (
        <div className={s.formControl + " " + (isError ? s.error : '')}>
            <input {...input} {...props}/>
            {isError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}





export const Textarea = ({input, meta, ...props}) => {

    const isError = meta.touched &&  meta.error

    return (
        <div className={s.formControl+ " " + (isError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}