import React from "react";
import style from "./Post.module.css";
import like from '../../../../assets/like-icon.png'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                alt="userlogo"
            />
            <div className={style.message}>{props.message}</div>
            <div className={style.like}>
                <div className={style.likeImage}>
                    <img src={like} alt="like" />
                </div>
                <div className={style.likesCount}>{props.likesCount}</div>
            </div>
        </div>
    );
};

export default Post;
