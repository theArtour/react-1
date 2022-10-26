import React from 'react';
import Post from "../Posts/Post";

const Profile = function () {
    let postData = [
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
            message: "How are you'",

        }
    ]
    return (
        <main className='mainSection'>
            <Post message={postData[0].message}/>
            <Post message={postData[1].message}/>
            <Post message={postData[2].message}/>
        </main>
    )
}
export default Profile