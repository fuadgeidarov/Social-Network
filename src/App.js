import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



function App() {
    return (

            <div className="App-wrapper">
                <Header/>
                <Navbar />

                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer  />}/>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/music/*' element={<Music/>}></Route>
                        <Route path= '/news/*' element={<News/>}/>
                        <Route path='/settings/*' element={<Settings/>}></Route>

                    </Routes>


                </div>
            </div>


    );
}


export default App;
