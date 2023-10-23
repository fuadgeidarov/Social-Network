import React from 'react';
import classes from './Sidebar.module.css'
const Sidebar = (props) => {
    return (
        <div className={classes.block}>
            <div>
                <a href={'#'} className={classes.name}>{props.name}</a></div>
            <img className={classes.ava} src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        </div>

    );
};

export default Sidebar;