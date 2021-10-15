import './App.css';
import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {AppActions, initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader/Preloader";
import {Users} from "./components/Users/Users";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect} from "react-router";
import {Friends} from "./components/Friengs/Friends";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";


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
                        <Header/>
                    </div>
                    <div className={this.props.isPopup ? 'navBar' : 'smallNavBar'}>
                        <Navbar isPopup={this.props.isPopup} setPopupMenu={this.props.setPopupMenu}/>
                    </div>
                    <Switch className='content'>
                        <Route path="/profile/:userId?" render={() => <Profile/>}/>
                        <Route path="/messages" render={() => <Dialogs/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/users" render={()=> <Users/>}/>
                        <Route path="/login" render={()=> <Login/>}/>
                        <Route path="/" render={()=> <Redirect to={'/profile'}/>}/>
                    </Switch>
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
