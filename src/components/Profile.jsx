import React from "react";
import "../assets/css/style.css";
import DEV from '../assets/img/developer.svg'
export default function Header_() {
  return (
    <>
      <header id="header" className="header-tops">
        <div className="container">
          <h1>
           Hithesh kumar
          </h1>

          <h2>
            I'm a passionate <span>UI Developer</span>
          </h2>

          <div className="social-links">
            <a href="https://github.com/Hithesh-k1" className="twitter">
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hithesh-k/"
              className="facebook"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/hithesh__k" className="instagram">
              <i class="fab fa-instagram"></i>
            </a>
    <a href="https://dev.to/hithesh__k" className="linkedin">
          <i class="fab fa-dev"></i>
        </a>
            <a
              href="https://stackoverflow.com/users/12134535/hithesh-k?tab=profile"
              className="linkedin"
            >
              <i class="fab fa-stack-overflow"></i>
            </a>

          </div>
          <div >
          {/* <img  style={{width:'50%',height:'50%'}} src={DEV} alt='dev'/> */}
          </div>
        </div>
      </header>
    </>
  );
}
