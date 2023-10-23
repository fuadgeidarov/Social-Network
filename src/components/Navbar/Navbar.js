import React from 'react';
import './Navbar.module.css'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import store from "../../Redux/Store";



const Navbar = (props) => {
    const sidebar= store.getState().sideBar.friends.map((f)=>{
        return(
            <Sidebar name={f.name}/>
        )
    })
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={classes.active}>Messages</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/users' className={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={classes.active}>Music</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/settings' className={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={classes.active}>News</NavLink>
            </div>
            <h1 className={classes.friends}>Friends</h1>
            {sidebar}
        </nav>

    );
};

export default Navbar;