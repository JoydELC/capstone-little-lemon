import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () =>{
    return(
        <>
        <img src={logo} alt="logo-footer"/>
        <nav>
        <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Menu">Menu</a>
                </li>
                <li>
                    <a href="#Reservations">Reservations</a>
                </li>
                <li>
                    <a href="#OrderOnline">Order Online</a>
                </li>
                <li>
                    <a href="#Login">Login</a>
                </li>
            </ul>
        </nav>
        <div className="contact-info">
            <ul>
                <li>Adress</li>
                <li>Phone</li>
                <li>Email</li>
            </ul>

        </div>
        <div className="links-media">
        <ul>
                <li>
                    <a href="#ig">instagram</a>
                </li>
                <li>
                    <a href="#fb">Facebook</a>
                </li>
                <li>
                    <a href="#tiktok">Tiktok</a>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Footer;