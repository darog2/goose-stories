import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>
                        <Route exact path='/profile' element={<Profile/>}/>
                        <Route exact path="/news" element={<News/>}/>
                        <Route exact path="/music" element={<Music/>}/>
                        <Route exact path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


    );
}


export default App;
