import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile ) {
        return <Preloader/>
    }
    return (
        <div className={classes.block}>
            <div><a href={'#'}><img className={classes.avatar}
                                    src={'https://cdn-icons-png.flaticon.com/512/2042/2042895.png'}/>
            </a>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.fullName}</p>
               <a href={'#'}> <ProfileStatusWithHooks status={props.status} /></a>
                <div>
                    <p className={classes.text}>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>


            </div>
        </div>

    );
};

export default ProfileInfo;