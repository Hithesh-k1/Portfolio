import React from "react";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,

  
} from "@ant-design/icons";
import TechStack from './TechStack'

export default function Header_() {
  return (
    <>
      <header id="header" className="header-tops">
        <div className="container">
          <h1>
            <a href="index.html">Hithesh kumar</a>
          </h1>
          {/* <a href="index.html" className="mr-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a> */}
          <h2>
            I'm a passionate <span>UI Developer</span>
          </h2>

          {/* <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#services">Services</a></li>s
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
          <div className="social-links">
            <a href="#" className="twitter">
              <GithubOutlined />
              
            </a>
            <a href="#" className="facebook">
              <LinkedinOutlined />
            </a>
            <a href="#" className="instagram">
              <InstagramOutlined />
            </a>
            {/* <a href="#" className="google-plus">
              <FacebookOutlined />{" "}
            </a> */}
            <a href="#" className="linkedin">
              <TwitterOutlined />
            </a>
          </div>

          <h2>Known Tech Stack</h2>
            <TechStack/>

        </div>
      </header>
    </>
  );
}
