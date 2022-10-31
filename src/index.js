import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Friend from "./Components/Dialogs/friend";
import Message from "./Components/Dialogs/Message";
import Post from "./Components/Posts/Post";
//
let postsData = [
    {
        id: '1',
        message: "My first post in this site",
    },
    {
        id: '2',
        message: "Hello everyone",
    },
    {
        id: '3',
        message: "How are you",

    },{
        id: '4',
        message: "Go to the gum",

    },{
        id: '5',
        message: "I haven't eaten anything today",

    }
]
//
// dialogs
let dialogsData = [
    {
        id: '1',
        name: "Sofia Romanovna",
        date: ' - 21 окт. 2022'
    },
    {
        id: '2',
        name: "Christina Tabuchikova",
        date: ' - 25 окт. 2022'
    },
    {
        id: '3',
        name: "Eva Braun",
        date: ' - 01 ноя. 2022'
    }, {
        id: '4',
        name: "Dagny Taggart",
        date: ' - 10 ноя. 2022'
    }
]
// // message
let messageData = [
    {
        id: '1',
        message: "Привет",
        date: '16:03,26.10.2022'
    },
    {
        id: '2',
        message: "Как дела",
        date: '16:13,26.10.2022'
    },
    {
        id: '3',
        message: "Скоро буду )",
        date: '16:22,26.10.2022'
    }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App dialogs={dialogsElements} message={messageElements} posts={postsElements}/>*/}
      <App posts={postsData} dialog={dialogsData} message={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




