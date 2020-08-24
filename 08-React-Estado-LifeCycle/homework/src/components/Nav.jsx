import React from 'react';
import Logo from './logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import style from './Nav.css'
 
function Nav({onSearch}) {
  return (
    <div className={style.navbar}>
      <nav class="navbar navbar-dark bg-dark">
        <div >
          <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
          <span> Henry - Weather App</span>   
        </div>     
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>

  );
};

export default Nav;
