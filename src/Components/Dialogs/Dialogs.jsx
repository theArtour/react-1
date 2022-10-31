import React from 'react';
import style from './Dialogs.module.css';
import Friend from "./friend";
import Message from "./Message";
import {BrowserRouter, Router, Routes, Route, Link, NavLink} from "react-router-dom";

const Dialogs = function (props) {
    // let dialogsData = [
    //     {
    //         id: '1',
    //         name: "Sofia Romanovna",
    //         date: ' - 21 окт. 2022'
    //     },
    //     {
    //         id: '2',
    //         name: "Christina Tabuchikova",
    //         date: ' - 25 окт. 2022'
    //     },
    //     {
    //         id: '3',
    //         name: "Eva Braun",
    //         date: ' - 01 ноя. 2022'
    //     }, {
    //         id: '4',
    //         name: "Dagny Taggart",
    //         date: ' - 10 ноя. 2022'
    //     }
    // ]
    // let messageData = [
    //     {
    //         id: '1',
    //         message: "Привет",
    //         date: '16:03,26.10.2022'
    //     },
    //     {
    //         id: '2',
    //         message: "Как дела",
    //         date: '16:13,26.10.2022'
    //     },
    //     {
    //         id: '3',
    //         message: "Скоро буду )",
    //         date: '16:22,26.10.2022'
    //     }
    // ]
    let dialogsElements = props.dialog.map((dialog) => {
        return <Friend name={dialog.name} date={dialog.date} id={dialog.id}/>
    });
    let messageElements = props.message.map((message) => {
        return <Message message={message.message}/>
    })
    return (
        <div className={style.dialogs}>
            <div className={style.friends}>
                <h2>Messages</h2>
                <div className={style.friendsColumn}>
                    {/*{props.dialogs}*/}
                    {dialogsElements}
                </div>
            </div>
            <div className={style.messages}>
                {/*{props.message}*/}
                {messageElements}
                <input placeholder={'...'} className={style.textMessage} type="text"/>
            </div>
        </div>
    )
}
export default Dialogs