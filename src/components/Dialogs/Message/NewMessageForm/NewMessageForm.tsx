import React from "react";
import s from './NewMessageForm.module.css'
import { useForm } from "react-hook-form";
import errorIcon from "../../../../defaultData/Icon/errorIcon.png"

type props = {
    addMessage:(message:string) => void
}


const NewMessageForm: React.FC<props> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:{message:string}) => {
        props.addMessage(data.message)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <textarea className={s.sendMessageForm} placeholder={'Enter your message...'}  {...register("message", { required: true })} />
            </div>
            <input disabled={!!errors.message} className={s.sendMessageButton} type="submit" />
            {errors.message &&
            <div className={s.errorMessage}>
                <img className={s.errorIcon} src={errorIcon} alt=""/>
                <span>Field for message cant`t be empty</span>
            </div>}
        </form>
    )
}

export default NewMessageForm




//     console.log(watch("example")); // watch input value by passing the name of it
//
//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {/* register your input into the hook by invoking the "register" function */}
//
//
//             {/* include validation with required or other standard HTML validation rules */}
//             <input {...register("exampleRequired", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.exampleRequired && <span>This field is required</span>}
//
//             <input type="submit" />
//         </form>
//     );
// }