import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./components/Redux/state";

type AppProps = {
    store: StoreType
}

const App: React.FC<AppProps> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile state={state.profilePage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 // addPost={props.store.addPost.bind(props.store)}
                                                                 // changeNewTextCallBack={props.store.changeNewTextCallBack.bind(props.store)}
                        />}/>
                        <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}
                                                                   // addMessage={props.store.addMessage.bind(props.store)}
                                                                   // onChangeMessageCallBack={props.store.onChangeMessageCallBack.bind(props.store)}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
