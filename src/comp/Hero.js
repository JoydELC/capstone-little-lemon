import React from "react";
import image from '../assets/restauranfood.jpg';
import styles from '../styles/Hero.module.css';


function Hero() {
    return(
        <section className={`${styles.hero}`} id="Hero">
        <div className={`${styles.heroContent}`}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Reserve a Table</button>
        </div>
        <div className={`${styles.heroPicture}`}>
          <img src={image} alt="Hero" />
        </div>
      </section>
    )
}
export default Hero;