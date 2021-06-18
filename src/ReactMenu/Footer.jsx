import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () =>{
    return(
        <>
     
<footer className="text-center text-lg-start bg-light text-muted mt-5 ">
<section
  className="container  d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
>
  <div className="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>

  <div>
    <NavLink to="" className="me-4 text-reset">
        <FaFacebookF />      
    </NavLink>
    <NavLink to="" className="me-4 text-reset">
      <FaTwitter />
    </NavLink>
    <NavLink to="" className="me-4 text-reset">
      <FaGooglePlus />
    </NavLink>
    <NavLink to="" className="me-4 text-reset">
      <FaInstagramSquare />
    </NavLink>
    <NavLink to="" className="me-4 text-reset">
      <FaLinkedinIn />
    </NavLink>
    <NavLink to="" className="me-4 text-reset">
      <FaGithub />
    </NavLink>
  </div>
</section>

<section className="">
  <div className="container text-center text-md-start mt-5">
    <div className="row mt-3">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3"></i>Legitquest
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <NavLink to="#!" className="text-reset">Angular</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">React</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">Vue</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">Laravel</NavLink>
        </p>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <NavLink to="#!" className="text-reset">Pricing</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">Settings</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">Orders</NavLink>
        </p>
        <p>
          <NavLink to="#!" className="text-reset">Help</NavLink>
        </p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          Contact
        </h6>
        <p><i className="fas fa-home me-3"></i> New Delhi, India -110024.</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>
    </div>
  </div>
</section>

<div className="text-center p-4 border-top">
  © 2021 Copyright: <NavLink to="text-reset fw-bold" href="https://legitquest.com/">Legitquest </NavLink>
</div>
</footer>
        
        </>
    )
}

export default Footer;