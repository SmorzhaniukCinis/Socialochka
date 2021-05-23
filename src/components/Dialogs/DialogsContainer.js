import React from 'react';
import {Redirect} from 'react-router';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


class DialogsContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        debugger
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Dialogs/>

    }
}

let AuthRedirectComponent = WithAuthRedirect(DialogsContainer)

let mapStateToProps = (state) => {
    return ({
        
    })
}
export default connect (mapStateToProps, {}) (AuthRedirectComponent)

