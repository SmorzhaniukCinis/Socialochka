import {Field, reduxForm} from "redux-form";
import s from "../Posts.module.css";
import React from "react";
import {Textarea} from "../../../FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";



let maxLength = maxLengthCreator(100)

const PostForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.newPostField} validate={[maxLength]} component={Textarea} name={"newPostField"}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button className={s.SendPostButton}>Send post</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'postForm'})(PostForm)
export default ReduxPostForm