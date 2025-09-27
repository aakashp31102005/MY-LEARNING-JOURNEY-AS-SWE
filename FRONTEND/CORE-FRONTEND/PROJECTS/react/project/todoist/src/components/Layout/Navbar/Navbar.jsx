import React from 'react'
import styles from  "./Navbar.module.css";
import logo from '../../../assets/icon.png'
import { Link } from 'react-router-dom';
function Navbar() {
    console.log(styles)
  return (
  
   <nav className={styles.nav}>
    <div className={styles.left}>
          <li>
            <img className={styles.logo} src={logo} alt="" />
            <h1>todoist</h1>
          </li>
       </div>
    <div className={styles.right}>
      <span className={styles.menuicn}>☰</span>
      <ul>
        <li>
          <h2 className={styles.font}>Made for</h2>
        </li>
        <li>
          <h2 className={styles.font}>Resources</h2>
        </li>
        <li>
          <h2 className={styles.font}>Pricing</h2>
        </li>
        <li>
          <Link className={styles.loginbtn} to="/login">Start for free</Link>
        </li>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
