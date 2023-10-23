import React from 'react';
import classes from './Header.module.css'
import profile from "../Profile/Profile";

const Header = () => {
    return (
        <header className={classes.header}>
           <div><a href={'http://localhost:3000/profile'}><img src={'https://i.pinimg.com/736x/d6/31/89/d631897a2e79fbf98f3e0aaa66b27cdd.jpg'}/></a></div>
          <div><h2 className={classes.social}>VC - The Best and Creative Social Network!</h2></div>
        </header>
    );
};

export default Header;