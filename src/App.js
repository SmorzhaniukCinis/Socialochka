import './App.css';
import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import FriendsContainer from "./components/Friengs/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainerComponent";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {AppActions, initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader/Preloader";
import {WithSuspense} from "./HOC/WithSuspense";
import {Users} from "./components/Users/Users";

const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
                <div className={this.props.isPopup ? 'appWrapper' : 'appWrapperSmall'}>
                    <div className='header'>
                        <HeaderContainer/>
                    </div>
                    <div className={this.props.isPopup ? 'navBar' : 'smallNavBar'}>
                        <Navbar isPopup={this.props.isPopup} setPopupMenu={this.props.setPopupMenu}/>
                    </div>
                    <div className='content'>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <DialogsContainer/>}/>
                        <Route path="/friends" render={() => <FriendsContainer/>}/>
                        <Route path="/users" render={()=> <Users/>}/>
                        <Route path="/login" render={WithSuspense(LoginContainer)}/>
                    </div>
                    <div className='footer'>
                        <Footer/>
                    </div>
                </div>
        );
    }
}
const MapStateToProps = (state)=> ({
    initialized: state.InitialApp.initialized,
    isPopup: state.InitialApp.isPopup
})
export default connect(MapStateToProps, {initializeApp, setPopupMenu:AppActions.setPopupMenu}) (App);
