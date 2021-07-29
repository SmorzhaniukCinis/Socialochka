import React from "react";
import s from './NewMessageForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../FormsControl/FormsControl";
import {maxLengthCreator} from "../../../../utils/validators/validators";

let maxLength = maxLengthCreator(50)

const NewMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit} className={s.container}>
            <div>
                <Field component={Textarea} validate={[maxLength]} name={'newMessage'} className={s.sendMessageForm}  value={props.messageValue}/>
            </div>
            <button className={s.sendMessageButton} >Send</button>
        </form>
    )
}

let ReduxNewMessageForm = reduxForm ({form:'newMessage'}) (NewMessageForm)

export default ReduxNewMessageForm