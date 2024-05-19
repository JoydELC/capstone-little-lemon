// components/Nav.js
import React from 'react';
import { useState } from 'react'
import logo from '../assets/logo.jpg';
import styles from '../styles/Nav.module.css';

function Nav() {
    //adding states
    const [isActive, setIsActive] = useState(false);
    // add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    };
  return (
    <nav className={`${styles.navbar}`}> 
      <div className="logo">
        <img src={logo} alt='logo-nav'/>
      </div>
      <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}` }>
        <li onClick={removeActive} className={`${styles.navLink}`}><a href="/">Home</a></li>
        <li  onClick={removeActive} className={`${styles.navLink}`}><a href="#About">About</a></li>
        <li  onClick={removeActive} className={`${styles.navLink}`}><a href="#Specials">Menu</a></li>
        <li  onClick={removeActive} className={`${styles.navLink}`}><a href="/Booking">Reservations</a></li>
        <li  onClick={removeActive} className={`${styles.navLink}`}><a href="#Order Online">Order Online</a></li>
        <li  onClick={removeActive} className={`${styles.navLink}`}><a href="#Login">Login</a></li>
      </ul>
      <div className={`${styles.hamburguer} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
      </div>
    </nav>
  );
}

export default Nav;