import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon /> <TwitterIcon />
      </div>
      <p> &copy; 2023 Designed by Phan Tien Minh</p>
    </div>
  );
}

export default Footer;
