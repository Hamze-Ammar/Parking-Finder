import React from "react";
import { useStyles } from "./styles";
import {
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.layout}>
        <div className={classes.container}>
          <div>header</div>
          <div>center</div>
        </div>
        <div className={classes.footer}>
          <div></div>
          <div>Terms and Conditions</div>
          <div className={classes.footerIconContainer}>
            <FaFacebook className={classes.footerIcon}/>
            <FaInstagram className={classes.footerIcon}/>
            <FaFacebookMessenger className={classes.footerIcon}/>
            <FaTwitter className={classes.footerIcon}/>
            <FaEnvelope className={classes.footerIcon}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
