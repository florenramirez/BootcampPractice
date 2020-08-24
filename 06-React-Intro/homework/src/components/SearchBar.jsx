import React from 'react';

export default function SearchBar(props) {
  // acá va tu código 
  return (
  <div>
    <input type='texto' placeholder='Cuidad...'/>
    <button onClick={(e)=> props.onSearch('Buscando')}>Agregar</button>
  </div>
  );
};