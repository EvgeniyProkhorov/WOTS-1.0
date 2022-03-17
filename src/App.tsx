import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route} from "react-router-dom";
import {Login} from "./components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar sidebar={store.getState().sidebar}/>
            <div className='app-wrapper-content'>
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                {/*<Route path="/profile" element={<ProfileContainer/>}/>*/}
                <Route path="/dialogs" component={DialogsContainer}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/login" component={Login}/>
            </div>
        </div>
    )
}

export default App;
