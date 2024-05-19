import React from "react";
import styles from "../styles/Specials.module.css";

function Specials({title,description, image}){
    return(
            <div className={`${styles.specialsCards}`} >
                    <img src={image} alt="dish"/>
                <div className={`${styles.specialsCards}`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
    );
}
export default Specials;