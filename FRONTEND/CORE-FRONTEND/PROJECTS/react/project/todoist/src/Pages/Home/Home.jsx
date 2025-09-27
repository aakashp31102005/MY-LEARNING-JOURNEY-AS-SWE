import React from 'react'
import {Navbar} from '../../components/main';
import logo from '../../assets/icon.png'
import hpgr from '../../assets/hpgr.png';
import './home.css'
import { Link } from 'react-router-dom';
function Home() {

  return (
    <div>
      <Navbar></Navbar>
      <main className='main'>
        <section className="first">
          <h1>Clarity,finally</h1>
          <h3>Join 50+ million professionals who simplify work and life with the world’s #1 to-do list app.</h3>
          <Link className="startbtnl center" to="/login" preventScrollReset>Start for free</Link>       
           </section>
        <section className=" second"><img src={hpgr} alt="" /></section>
        
      </main>
      <footer className="footer">
      {/* Left section */}
      <div className="footer-left">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Todoist logo"
          />
          <h3>todoist</h3>
        </div>
        <p>
          Join millions of people who organize <br /> work and life with Todoist.
        </p>
      </div>

      {/* Middle columns */}
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">For Teams</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Download Apps</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Productivity Methods</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Channel Partners</a></li>
            <li><a href="#">Developer API</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li>
              <a href="#">
                Careers <span className="hiring-badge">We’re hiring!</span>
              </a>
            </li>
            <li><a href="#">Inspiration Hub</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Twist</a></li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="footer-social">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111589.png" alt="Reddit" /></a>
      </div>
    </footer>
    </div>
  )
}

export default Home
