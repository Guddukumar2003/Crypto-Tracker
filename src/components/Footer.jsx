import React from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/Guddukumar2003" target="_blank">
        <FaGithub className="icon-git" />
      </a>
      <a href="https://youtube.com/@guddukumar-pf1cn?si=glgOaY9FUQ4zNHGU" target="_blank">
        <FaYoutube className="icon-yt" />
      </a>
      <a
        href="www.linkedin.com/in/guddu-kumar-037b09290"
        target="_blank"
      >
        <FaLinkedin className="icon-ldin" />
      </a>
      
    </footer>
  );
}

export default Footer;
