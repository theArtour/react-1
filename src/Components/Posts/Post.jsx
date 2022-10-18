import React from 'react';
import style  from './Posts.module.css';

const Post = function (){
    return(
        <div className={style.post} >
                <div className={style.infoUser}>
                    <img  className={style.avatar}  />
                    <p className={style.userName} >Sofia Romanovna</p>
                </div>
            <div className={style.postContent}>My first post</div>
        </div>
    )
}
export default Post