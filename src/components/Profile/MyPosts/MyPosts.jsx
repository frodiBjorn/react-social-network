import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <div className={style.posts}>
                <Post message = 'Hi, how are you?'  likesCount = '2'/>
                <Post message = 'My first post' likesCount = '23'/>
                <Post message = 'My second post' likesCount = '2020'/>
            </div>
        </div>
    );
};

export default MyPosts;
