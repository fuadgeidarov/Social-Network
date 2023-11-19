import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
           <div className={classes.logo}><a href={'http://localhost:3000/profile'}><img src={'https://i.pinimg.com/736x/d6/31/89/d631897a2e79fbf98f3e0aaa66b27cdd.jpg'}/></a></div>
          <div><h2 className={classes.social}>VC </h2></div>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div ><a href={'/profile'} className={classes.log}>{props.login}
                </a><button className={classes.btn} onClick={props.logout}>
                        Log Out</button> </div>
                    : <NavLink to={"/login"} className={classes.login}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;