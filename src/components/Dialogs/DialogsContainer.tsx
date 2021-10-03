import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";


class DialogsContainer extends React.Component {
    render() {
        return <Dialogs/>

    }
}

let mapStateToProps = (state:AppStateType) => {
    return ({})
}

export default connect(mapStateToProps, {})(DialogsContainer)

