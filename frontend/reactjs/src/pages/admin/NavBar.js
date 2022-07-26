import React from "react";
import Logo from "../../ui/Logo";
import { createUseStyles } from "react-jss";
import SimpleBtn from "../../ui/SimpleBtn";
import { Colors } from "../../constant/color";

const NavBar = () => {
  const classes = useStyles();

  const logout = () => {
    console.log("you need to implement logout first");
  };

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <div>
        <SimpleBtn onClick={logout} text="Sign out" />
      </div>
    </div>
  );
};

export default NavBar;

const useStyles = createUseStyles({
  container: {
    minHeight: "16vh",
    padding: " 7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.background500,
  },
});
