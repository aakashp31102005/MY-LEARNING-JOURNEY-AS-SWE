import Searchbar from "./Searchbar.jsx";
import './Topbar.css'
import notificationicon from '../assets/notification.png'
function Topbar(){
    return(
        <>
            <div className="hero topbar">
                        <div className="ytlogo">
                                <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 50 50">
                                <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                                </svg>
                                <div className="ytl">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="50px" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                </svg>
                                <p>Youtube</p>
                            </div>
                        </div>
                        <Searchbar ClassName='sbar'></Searchbar>
                        <div className="lsidetb">
                        <div className="create">+ Create</div>
                        <img src={notificationicon} className="notificationicon" alt="notification" />
                        <div className="profile"></div>
                        </div>
            </div>
        </>
    )
}
export  default Topbar;