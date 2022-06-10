import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 text-white ">
        <div>
          <span className="text-5xl flex flex-row gap-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/fahad.fahim09"
            >
              <FaFacebook />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/fahad09fahim"
            >
              <FaGithub />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/md-fahad-al-fahim-2b2526197/"
            >
              <FaLinkedin />
            </a>
          </span>
          <p>Copyright © {year} - All right reserved by Md. Fahad Al Fahim </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
