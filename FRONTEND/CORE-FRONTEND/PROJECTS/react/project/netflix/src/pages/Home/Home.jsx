import React, { useContext, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import herobanner from '../../assets/assets/hero_banner.jpg';
import herotitle from '../../assets/assets/hero_title.png';
import playicon from '../../assets/assets/play_icon.png';
import info_icon from '../../assets/assets/info_icon.png';
import Tittlecard from '../../components/Tittlecards/Tittlecard.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import{ThemeContext} from '../../App.jsx'
function Home() {
  const {themeval,settheme}=useContext(ThemeContext)
  useEffect(()=>{console.log("home rerendered")},[])
  return (
    <div className='home' style={{backgroundColor:themeval.theme}}>
      <Navbar></Navbar>
      <div className="hero">
        <div className="c">
        <img className='banner-img' src={herobanner} alt="" />
        <div className="hero-caption">
          <img className='caption-img' src={herotitle} alt="" />
          <p >The display property cannot be transitioned or animated in CSS.
            Only animatable properties like opacity, transform, color, etc. can be transitioned.
          </p>
          <div className="vbtn"> <button className='playicn'><img src={playicon} alt="#" /> Play </button>
          <button className='abouticn'><img src={info_icon} alt="#" /> About</button> 
          </div>
        </div>
        </div>
        <Tittlecard category={"only on netflix"}/>
        <Tittlecard category={"Upcoming"}></Tittlecard>
        <Tittlecard category={"top pics for you"}></Tittlecard>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
