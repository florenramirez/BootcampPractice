import React from 'react';
import styles from './Card.module.css';

// /*className={`btn ${styles.redBtn}`} /*

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.cardContainer}>
      <button className={`btn ${styles.btn} ${styles.whiteText}`} onClick={props.onClose}>x</button>
      <h1 className={styles.text}>{props.name}</h1>
      <div className= { styles.subContainer }>
        <div>
          <p>MIN</p>
          <p>{props.min}°</p>
        </div>   
        <div>
          <p>MAX</p>
          <p>{props.max}°</p>
        </div>
        <div>
          <img src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"} alt =""/>
        </div>
      </div>
     
    </div>);
};
