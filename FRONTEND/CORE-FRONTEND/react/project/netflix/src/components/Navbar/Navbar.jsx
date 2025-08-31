import './Navbar.css'
import React, { useContext } from 'react'
import logo from'../../assets/assets/logo.png';
import search_icn from '../../assets/assets/search_icon.svg'
import bell_icn from '../../assets/assets/bell_icon.svg'
import caret_icn from '../../assets/assets/caret_icon.svg'
import profile_icn from '../../assets/assets/profile_img.png'
import { ThemeContext } from '../../App';

function Navbar() {
  const { themeval, settheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    settheme(prev => {const obj={
      ...prev,
      theme: prev.theme === "black" ? "white" : "black"
    };console.log(themeval);return obj});
  };

  return (
    <div 
      className='Navbar' 
      style={{ "--theme-clr": themeval.theme }}
    >
      <div className="navbar-left">
        <img src={logo} alt="netflix" />
        <ul style={{ listStyle: 'none' }}>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icn} alt="search" />
        <label id='themel' htmlFor="theme">
          Theme
          <input 
            onClick={toggleTheme} 
            type="button" 
            id='theme' 
            value="theme" 
          />
        </label>
        <p>Children</p>
        <img src={bell_icn} alt="bell" />
        <div className='navbar-profile'>
          <img className="p-icn" src={profile_icn} alt="profile"/>
          <div className="dropdown">
            <img className='c-icn' src={caret_icn} alt="caret" />
            <h3 className='s-out'>sign out</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
