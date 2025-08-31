import React, { useEffect, useState } from "react";
import SubscribedChannels from "./SubscribedChannels.jsx";
import './sidebar.css'
function Sdbronclick() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [showLimit, setShowLimit] = useState(7);

    // Mock all subscriptions (imagine fetched from API)
    const allSubscriptions = [
        { id: 1, logo: 'logo1.png', name: 'Aakash' },
        { id: 2, logo: 'logo2.png', name: 'Ganesh' },
        { id: 3, logo: 'logo3.png', name: 'Ravi' },
        { id: 4, logo: 'logo4.png', name: 'Pooja' },
        { id: 5, logo: 'logo5.png', name: 'Ankit' },
        { id: 6, logo: 'logo6.png', name: 'Sneha' },
        { id: 7, logo: 'logo7.png', name: 'Vikas' },
        { id: 8, logo: 'logo8.png', name: 'Priya' },
        { id: 9, logo: 'logo9.png', name: 'Kiran' },
        { id: 10, logo: 'logo10.png', name: 'Suresh' },
        { id: 11, logo: 'logo11.png', name: 'Meena' },
        { id: 12, logo: 'logo12.png', name: 'Neha' }
    ];

    useEffect(() => {
        const initialData = allSubscriptions.slice(0, showLimit);
        setSubscriptions(initialData);
    }, []);

    useEffect(() => {
        const updatedData = allSubscriptions.slice(0, showLimit);
        setSubscriptions(updatedData);
    }, [showLimit]);

    const loadMore = () => {
        setShowLimit((prev) => prev + 5);
    };
    const showless=()=>{
         setShowLimit((prev)=>prev-5);   
    }
    return (
        <>
        <div className="sdbcontainer">
        <div className="sdbronclk">
            <div className="homediv c1">
                <h5 className="items">Home</h5>
                <h5 className="items">Shorts</h5>
                <h5 className="items">Subscription</h5>
            </div>
            <div className="youdiv c1">
                <h5 className="items">History</h5>
                <h5 className="items">Playlists</h5>
                <h5 className="items">Your videos</h5>
                <h5 className="items">Your courses</h5>
                <h5 className="items">Watch later</h5>
                <h5 className="items">Liked videos</h5>
            </div>
            <div className="subscriptions c1">
                {subscriptions.map((channel) => (
                    <React.Fragment key={channel.id}>
                        <SubscribedChannels logo={channel.logo} cname={channel.name} />
                    </React.Fragment>
                ))}
                {showLimit < allSubscriptions.length && (
                    <button className="items" onClick={loadMore}>Show more</button>
                )}
                {showLimit == allSubscriptions.length &&(
                    <button className="items"  onClick={showless}>Show less</button>
                )}
            </div>
            <div className="explore c1">
                <h5 className="items">Trending</h5>   
                <h5 className="items">Shopping</h5>
                <h5 className="items">Music</h5>
                <h5 className="items">Films</h5> 
                <h5 className="items">Gaming</h5>
                <h5 className="items">News</h5>
                <h5 className="items">Sports</h5>        
                <h5 className="items">Podcast</h5>  

            </div>

        </div>
        </div>
        </>
    );
}

export default Sdbronclick;
