import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import SimpleBtn from "../../../ui/SimpleBtn";
import { Colors } from "../../../constant/color";
import { AuthContext } from "../../../store/AuthContext";

const NavBar = () => {
  const classes = useStyles();
  const AuthCtx = useContext(AuthContext);
  return (
    <div className={classes.container}>

      <div>
        <SimpleBtn
          onClick={() => {
            AuthCtx.logout();
          }}
          text="Sign out"
        />
      </div>
    </div>
  );
};

export default NavBar;

const useStyles = createUseStyles({
  container: {
    minHeight: "8vh",
    padding: " 7px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: `linear-gradient(to right, ${Colors.background200} 0%, ${Colors.background500} 100%)`,
    fallbacks: {
      background: Colors.secondary500,
    },
  },
});
