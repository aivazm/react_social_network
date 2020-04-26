import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    )
};

export default App;
