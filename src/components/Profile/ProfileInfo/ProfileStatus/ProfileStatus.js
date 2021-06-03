import React from "react";
import s from "./ProfileStatus.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    statusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    activateEditMode =  () =>  {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return(
            <div className={s.userName}>
                <span>{this.props.profile.fullName}</span> <br/>
                <span>{this.props.profile.lookingForAJobDescription}</span> <br/>
                {this.state.editMode
                    ? <input onChange={this.statusChange} autoFocus={true} onBlur={() =>{this.deactivateEditMode()}}
                              value={this.state.status}/>
                    :<span onDoubleClick={() => {this.activateEditMode()}}> {this.props.status || "no status"}</span>}
            </div>
        )
    }
}



export default ProfileStatus