import React from 'react';
import {Redirect} from 'react-router';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Dialogs/>

    }
}

let mapStateToProps = (state) => {
    return ({})
}

export default connect(mapStateToProps, {})(DialogsContainer)
