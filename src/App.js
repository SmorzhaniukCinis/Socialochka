import './App.css';
import React from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import FriendsContainer from "./components/Friengs/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainerComponent";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <div className='header'>
                    <HeaderContainer/>
                </div>
                <div className='navBar'>
                    <Navbar/>
                </div>
                <div className='content'>
                    <Route path="/profile/:userId?"  render={() => <ProfileContainer/>}/>
                    <Route path="/messages" render={() => <Dialogs/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
