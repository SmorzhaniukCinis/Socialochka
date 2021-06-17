import './App.css';
import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import FriendsContainer from "./components/Friengs/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainerComponent";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader/Preloader";
import {WithSuspense} from "./HOC/WithSuspense";
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
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
                <div className='appWrapper'>
                    <div className='header'>
                        <HeaderContainer/>
                    </div>
                    <div className='navBar'>
                        <Navbar/>
                    </div>
                    <div className='content'>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <DialogsContainer/>}/>
                        <Route path="/friends" render={() => <FriendsContainer/>}/>
                        <Route path="/users" render={WithSuspense(UsersContainer)}/>
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
    initialized: state.InitialApp.initialized
})
export default connect(MapStateToProps, {initializeApp}) (App);
