import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <div>
            <section id="header" className="">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 align-middle">
                            <h1 className="my-1">
                                {props.name}
                                <strong className='brand-name'> Legitquest</strong>
                            </h1>
                            <h2 className="my-1">We are the team of talented developer making websites</h2>
                            <div className="mt-1">
                                <NavLink to={props.visit} className="btn btn-outline-info">{props.button}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={props.imgsrc} className="img-fluid animated" alt="main img" />                        
                        </div> 
                     </div>       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common;