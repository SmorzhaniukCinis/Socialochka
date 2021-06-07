import s from "../components/FormsControl/FormsControl.module.css";
import React from "react";

export const withFormControl = (Component) =>
    ({input, meta, ...props}) => {
        const isError = meta.touched &&  meta.error
        return (
            <div className={s.formControl + " " + (isError ? s.error : '')}>
                <Component {...input} {...props}/>
                {isError && <span className={s.error}>{meta.error}</span>}
            </div>
        )
    }