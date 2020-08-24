import React from 'react';
 
export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div>
    <p>MIN</p>
    <p>{props.min}°</p>
    </div>
    <div>
    <p>MAX</p>
    <p>{props.max}°</p>
    </div>
    <img src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"} alt =""/>
  </div>);
};