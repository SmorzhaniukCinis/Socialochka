import './App.css';
import React, {useEffect} from 'react';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Preloader/Preloader";
import {Users} from "./components/Users/Users";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect} from "react-router";
import {Friends} from "./components/Friengs/Friends";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";
import {getIsInitialized, getIsPopup} from "./redux/Selectors/AppSelectors";
import {Suspense} from 'react';
const ChatPage = React.lazy(() => import('./components/ChatPage/ChatPage'))


export const App: React.FC = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector(getIsInitialized)
    const isPopup = useSelector(getIsPopup)
    useEffect(() => {
        dispatch(initializeApp())
    }, [])


    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <div className={isPopup ? 'appWrapper' : 'appWrapperSmall'}>
            <div className='header'>
                <Header/>
            </div>
            <div className={isPopup ? 'navBar' : 'smallNavBar'}>
                <Navbar/>
            </div>
            <div className='content'>
                <Switch>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/messages" render={() => <Dialogs/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/users" render={() => <Users/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/chat" render={() =>
                        <Suspense fallback={<div><Preloader/></div>}>
                            <ChatPage/>
                        </Suspense>}/>
                    <Route path="/" render={() => <Redirect to={'/profile'}/>}/>
                </Switch>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
}


