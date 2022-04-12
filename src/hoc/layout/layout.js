import React from "react";
import { Link } from 'react-router-dom';
import "./layout.css";
// import{GiHamburgerMenu} from "react-icons/gi";
// import {Menu} from "src/assets/svgIcons/svgIcons";
// import {Facebook} from "react-icons/fa";
// import { Facebook } from 'react-feather';

const Layout = (props) => {
  return (
    <>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <h2>Resume</h2>
        </div>
        {/* second logo part */}
        <div className="menu-link">
          <ul className="ul-link">
            <li className="list">
                <Link to='/'>Home</Link>
            </li>
            <li className="list">
                <Link to='/resume-builder'>Resume Templates</Link>
            </li>
            {/* <li className="list">
              <a href="#">About us</a>
            </li>
            <li className="list">
              <a href="#">FAQ</a>
            </li> */}

            {/* button for login */}
            <button className="btn button1">Register</button>
            <button className="btn button1 btn-sign">
             Sign In
            </button>
          </ul>
        </div>
      </nav>

      {props.children}

      {/* footer */}

      <div className="footer">
        <div className="footer-content">
          <div className="footersection1">
            <div className="white ">
              <h2 className="white f-40size m-left">Resume</h2>
            </div>
            <div className=" m-left white">Connect with us on social media</div>
            <ul class="footer-links">
              <li><a href="#"> <i class="fa fa-facebook"></i></a></li>
              <li><a href="#"> <i class="fa fa-twitter"></i></a></li>
              <li><a href="#"> <i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"> <i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"> <i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="footersection2">
            <div className="white">
              <h2 className="f-20size mt-40">Job seekers</h2>
            </div>
            <div className="white">
              <p>Create Resume</p>
              <p>Resume Examples</p>
              <p>Resume Templates</p>
              <p>Cover Letter Templates</p>
            </div>
          </div>
          <div className="footersection3">
            <div className="white">
              <h2 className="mt-40 f-20size">Support</h2>
            </div>
            <div className=" white">
              <p>About</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
