import React from 'react';
import Post from "../Posts/Post";

const Profile = function (props) {
    // let postsData = [
    //     {
    //         id: '1',
    //         message: "My first post in this site",
    //     },
    //     {
    //         id: '2',
    //         message: "Hello everyone",
    //     },
    //     {
    //         id: '3',
    //         message: "How are you",
    //
    //     },{
    //         id: '4',
    //         message: "Go to the gum",
    //
    //     },{
    //         id: '5',
    //         message: "I haven't eaten anything today",
    //
    //     }
    // ]
    let postsElements = props.posts.map( (post) => {
        return <Post message={post.message}/>
    })
    return (
        <main className='mainSection'>
            {postsElements}
        </main>
    )
}
export default Profile