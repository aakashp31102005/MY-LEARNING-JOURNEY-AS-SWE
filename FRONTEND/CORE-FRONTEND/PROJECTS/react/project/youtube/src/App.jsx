import Searchbar from "./Topbar/Searchbar.jsx";
import React  from "react";
import Sidebar from "./sidebar/Sidebar.jsx";
import Topbar from "./Topbar/Topbar.jsx";
import Sdbronclick from "./sidebar/Sdbronclick.jsx";
import Yourvideo from "./Youtvideo/Yourvideo.jsx";
import Yourvide from "./Youtvideo/Yourvide2.jsx";
function App(){
    return(
        <React.Fragment>
            <Topbar></Topbar>
            {/* <Sidebar></Sidebar> */}
            <div className="hero" style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <Sdbronclick></Sdbronclick>
                    <Yourvideo></Yourvideo>
                    {/* <Yourvide></Yourvide> */}
            </div>
        </React.Fragment>
    )
}
export default App;