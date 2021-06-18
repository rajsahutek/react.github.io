import React from "react";
import web from "./images/web.jpg";
import Common from "./Common";

const About = () => {
    return (
        <div>
            <Common 
                name="Welcome to About Page" 
                button="Contact Now"
                imgsrc={web}
                visit="/contact"
                />
        </div>
            
    )
}

export default About;