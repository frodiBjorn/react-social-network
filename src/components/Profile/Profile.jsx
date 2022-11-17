import React from "react";
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import wallpaper from '../../assets/wallpaper2.jpg'


const Profile = () => {
    return (
        <div>
            <div>
                <div className={style.wallpaper}>
                    <img
                        src={wallpaper}
                        alt=""
                    />
                </div>
                <div>ava + descr</div>
                <MyPosts/>
            </div>
        </div>
    );
};

export default Profile;
