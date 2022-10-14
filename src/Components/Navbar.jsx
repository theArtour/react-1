import React from 'react';
import style  from './Navbar.module.css';

console.log(style)
const Navbar = function (){
    return(
        <div className={style.nav}>
            <a href="#" className={style.logo} >
            </a>
            <nav className={style.nav}>
                <a href='#' className={`${style.item} ${style.itemActive}`}>Feed</a>
                <a href='#' className={style.item} >Profile</a>
                <a href='#' className={style.item} >Explore</a>
                <a href='#' className={style.item} >Logout</a>
                <a href='#' className={style.item} >Trending</a>
                <a href="#" className={style.item} >SIGN IN +</a>
            </nav>
        </div>
    )
}
export default Navbar