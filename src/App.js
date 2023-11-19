import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



function App() {
    return (

            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar />

                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer  />}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/music/*' element={<Music/>}></Route>
                        <Route path= '/news/*' element={<News/>}/>
                        <Route path='/settings/*' element={<Settings/>}></Route>
                        <Route path='/login/*' element={<Login/>}></Route>

                    </Routes>


                </div>
            </div>


    );
}


export default App;
