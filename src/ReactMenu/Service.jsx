import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return(
        <div>
            <div className="container">   
                <div className="row">
                    <div className="col my-4"><h4>Our Services</h4></div>        
                </div>            
                <div className="row gy-3">                     
                    {
                        Sdata.map((val, ind) => {
                            return <Card 
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            />
                        })
                    }                                            
                </div>
            </div>
        </div> 
    )
}

export default Service;