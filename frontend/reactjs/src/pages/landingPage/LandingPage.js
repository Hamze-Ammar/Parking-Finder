import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
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
import SnackBar from "../../ui/SnackBar";

const LandingPage = () => {
  const AuthCtx = useContext(AuthContext);
  const classes = useStyles();
  const navigate = useNavigate();
  const [token, setToken] = useState(AuthCtx.token);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setToken(AuthCtx.token);
  }, [AuthCtx.token]);

  const navigateToLogin = () => {
    navigate("/login");
  };
  const logout = () => {
    AuthCtx.logout();
  };
  const handleRegisterClick = () => {
    if (token) {
      navigate("/registerParking");
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div className={classes.layout}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div>
              <Logo />
            </div>
            <div className={classes.login}>
              {!token ? (
                <SimpleBtn onClick={navigateToLogin} text="Login" />
              ) : (
                <SimpleBtn onClick={logout} text="Logout" />
              )}
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.bodyLeft}>
              <div>
                Join 802 <br /> Parkings <br />
                around <br /> the world
              </div>
              <div className={classes.bodyLeftLink}>
                become a partner?
                <SimpleBtn
                  onClick={handleRegisterClick}
                  className={classes.register}
                  text="Register Now"
                />
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
      <SnackBar
        severity="info"
        msg="Please Login First!"
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default LandingPage;
