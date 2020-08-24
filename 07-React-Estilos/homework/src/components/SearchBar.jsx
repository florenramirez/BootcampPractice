import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código 
  return (
  <div className={styles.container}>
    <input className = {styles.border} type='texto' placeholder='Cuidad...'/>
    <button className={` ${styles.btnAgregar} ${styles.border}`}onClick={(e)=> props.onSearch('Buscando')}>Agregar</button>
  </div>
  );
};