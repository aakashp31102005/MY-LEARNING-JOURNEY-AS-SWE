import React from "react";
import './sidebar.css'
function SubscribedChannels({ logo, cname }) {
    return (
        <div className="subscribed-channel">
            {/* <img src={logo} alt="logo" /> */}
            <h5 className="items">{cname}</h5>
        </div>
    );
}

export default SubscribedChannels;
