import React from "react";
import Common from "./Common";
import web from "./images/brazil.png";

const Home = () => {
    return (
        <div>
            <Common 
            name="Grow your business with" 
            button="Get Started" 
            imgsrc={web}
            visit="/service" />
        </div>
    )
}

export default Home;