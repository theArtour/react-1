import React from 'react';
import style  from './Posts.module.css';

const Post = function (props){

    return(
        <div className={style.post} >
                <div className={style.infoUser}>
                    <img  className={style.avatar}  />
                    <p className={style.userName} >Sofia Romanovna</p>
                </div>
            <div className={style.postContent}>{props.message}</div>
        </div>
    )
}
export default Post