import logo from "../../../assets/icon.png"
import   React from "react";
import './Navbar.css';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state={lfontsize:25,fontcolor:"#de483a",fontstyle:`"Signika", sans-serif`,fontsize:"12px",bfontfamily:'"Sora", sans-serif'}
    }
    render(){
        return(
            <>
            <div className="wholenavbar">
            <nav className="navbar" style={{"--lb-height":"45px","--lfont-size":`${this.state.lfontsize}px`,"--font-style":`${this.state.fontstyle}`,"--font-color":`${this.state.fontcolor}`,"--body-ff":`${this.state.bfontfamily}`,"--bodyfc":"#5f5853c6"}}>
                <div className="leftbar">
                    <img src={logo} alt="" id="logoicn"/>
                    <h1 id="wname">todoist</h1>
                </div>
                <div className="rightbar" style={{"--rbar-width":"100px","--rbar-height":"45px","--font-size":`${this.state.fontsize}`}}>
                    <ul className="rbarc">
                        <li id="madefr">
                            <h2>Made for </h2>
                        </li>
                        <li id="rsc">
                            <h2>Resources</h2>
                        </li>
                        <li id="price">
                            <h2>Pricing</h2>
                        </li>
                        <h1 className="sp">|</h1>
                        <li id="login">
                            <h2>Log in</h2>
                        </li>
                        <li id="signup">
                            <label id="startbtn" htmlFor="signup">Start for free</label>
                            <input type="button" id="start" />
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            </>
        )
    }
    
}


export default Navbar;