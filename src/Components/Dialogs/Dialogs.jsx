import React from 'react';
import style from './Dialogs.module.css';
import Friend from "./friend";
import Message from "./Message";
import {BrowserRouter, Router, Routes, Route, Link, NavLink} from "react-router-dom";
const Dialogs = function (props){
    return(
        <div className={style.dialogs} >
            <div className={style.friends}>
                <h2>Messages</h2>
                <div className={style.friendsColumn} >
                    <Friend name='Sofia Romanovna' date=' - 21 окт. 2022' id='1'/>
                    <Friend name='Christina Valuris' date=' - 25 окт. 2022' id='2'/>
                    <Friend name='Ulia Vindis' date=' - 01 ноя. 2022' id='3'/>
                    <Friend name='Klara Daineris' date=' - 10 ноя. 2022' id='4'/>
                </div>
            </div>
            <div className={style.messages}>
                <Message message='Привет'/>
                <Message message='Как дела'/>
                <Message message='Скоро буду )' />

                <input placeholder={'...'} className={style.textMessage} type="text"/>
            </div>
        </div>
    )
}
export  default  Dialogs