import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Friend = function (props){
    return(
        <NavLink to={'/Dialogs/' + props.id} className={style.itemDialog} >
            <div className={style.friend}>
                <div className={style.infoUser}>
                    <img  className={style.avatar}  />
                    <div className={style.userNameWrapper}>
                        <p className={style.userName} >{props.name}</p>
                        <p className={style.userName} >{props.date}</p>
                    </div>
                </div>
            </div>
        </NavLink>

    )
}
export  default  Friend