import React from "react";
import { useStyles } from "./styles";
import {
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../../ui/Logo";
import SlideShow from "../../components/slideShow/SlideShow";
import SimpleBtn from "../../ui/SimpleBtn";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.layout}>
        <div className={classes.container}>
          <div className={classes.header}>
            {" "}
            <div className={classes.login}><SimpleBtn text='Login'/></div>
          </div>
          <div className={classes.body}>
            <div className={classes.bodyLeft}>
              <div>
                <Logo />
              </div>
              <div>
                Join 802 <br /> Parkings <br />
                around <br /> the world
              </div>
              <div className={classes.bodyLeftLink}>
                become a partner?{" "}
                <span className={classes.register}>Register Now</span>
              </div>
            </div>
            <div className={classes.slideShowContainer}>
              <SlideShow />
            </div>
            <div className={classes.rightContainer}>
              <div>
                <div className={classes.bold}>
                  Life is too short <br /> to be spent on <br /> PARKING! <br />
                </div>
                <div className={classes.rightBottom}>
                  <div style={{ fontSize: "24px" }}>
                    Download <br /> Our App <br /> For Free
                  </div>
                  <div className={classes.logosContainer}>
                    <div>
                      <img
                        src={require("../../assets/images/GooglePlay.png")}
                      />
                    </div>
                    <div>
                      <img src={require("../../assets/images/AppStore.png")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div></div>
          <div>Terms and Conditions</div>
          <div className={classes.footerIconContainer}>
            <FaFacebook className={classes.footerIcon} />
            <FaInstagram className={classes.footerIcon} />
            <FaFacebookMessenger className={classes.footerIcon} />
            <FaTwitter className={classes.footerIcon} />
            <FaEnvelope className={classes.footerIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
