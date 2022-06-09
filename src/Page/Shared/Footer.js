import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 text-white ">
        <div>
          <p>Copyright © {year} - All right reserved by Md. Fahad Al Fahim </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
