import React, {Fragment, useState, useEffect} from "react";
import "./Navbar.css";
import video from '../../video/forest-97998.mp4';

const Navbar = () => {
  const [link, setLink] = useState("about");
  const [navbar, setNavbar] = useState(false);

  return (
    <Fragment>

      <div className="bg-video">
          <video className="bg-video__content" muted loop autoPlay>
            <source src={video} type="video/mp4" />
            Your browser is not supported!
          </video>
      </div>
      <div className="navbar-container">
      <nav className="nav">
        <a className={link === "about" ? "active" : ""} onClick={() => setLink("about")} href="/">Home</a>
        <a className={link === "skills" ? "active" : ""} onClick={() => setLink("skills")} href="/mentalissues">Mental Issues</a>
        <a className={link === "projects" ? "active" : ""} onClick={() => setLink("projects")} href="/music">Music</a>
        <a className={link === "purpose" ? "active" : ""} onClick={() => setLink("purpose")} href="/sessions">Spiritual Sessions</a>
      </nav>
    </div>
    {
      navbar && (
        <div className="mobNavLinks">
          <nav className="nav">
                <a className={link === "about" ? "active": ""} onClick={() => {setLink("about"); setNavbar(false)} } href="/">Home</a>
                <a className={link === "skills" ? "active": ""} onClick={() => {setLink("skills"); setNavbar(false)}} href="/mentalissues">Mental Issues</a>
                <a className={link === "projects" ? "active": ""} onClick={() => {setLink("projects"); setNavbar(false)}} href="/music">Music</a>
                <a className={link === "purpose" ? "active": ""} onClick={() => {setLink("purpose"); setNavbar(false)}} href="/sessions">Spiritual Sessions</a>
            </nav> 
        </div>
      )
    }
    <div className="mobNavbarContainer">
            <div className={`mobNavbarBackground ${navbar ? "animateNavbarBg" : ""} `}/>
            <div onClick={() => setNavbar(prev => !prev)} className="burgerNavbar">
              <div className={navbar ? "line1" : ""}></div>
              <div className={navbar ? "line2" : ""}></div>
              <div className={navbar ? "line3" : ""}></div>
            </div>
    </div>
    </Fragment>
    
  );
};

export default Navbar;
