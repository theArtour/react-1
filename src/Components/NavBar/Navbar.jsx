import React from 'react';
import style  from './Navbar.module.css';

const Navbar = function (){
    return(
        <div className={style.nav}>
            <a href="react-1/src/Components/NavBar/Navbar#" className={style.logo} >
            </a>
            <nav className={style.nav}>
                <a href='react-1/src/Components/NavBar/Navbar#' className={`${style.item} ${style.itemActive}`}>Feed</a>
                <a href='react-1/src/Components/NavBar/Navbar#' className={style.item} >Profile</a>
                <a href='react-1/src/Components/NavBar/Navbar#' className={style.item} >Explore</a>
                <a href='react-1/src/Components/NavBar/Navbar#' className={style.item} >Logout</a>
                <a href='react-1/src/Components/NavBar/Navbar#' className={style.item} >Trending</a>
                <a href="react-1/src/Components/NavBar/Navbar#" className={style.item} >SIGN IN +</a>
            </nav>
        </div>
    )
}
export default Navbar