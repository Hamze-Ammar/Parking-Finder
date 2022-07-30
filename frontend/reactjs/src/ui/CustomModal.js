import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { Colors } from "../constant/color";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CustomModal = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <CheckCircleOutlineIcon sx={{ fontSize: 32 }} />
          <div>Success!</div>
          <div>The form has been registered!</div>
          <div>Your request is under review!</div>
          <span
            onClick={() => {
              navigate("/");
            }}
            className={classes.closeBtn}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

const useStyles = createUseStyles({
  outerContainer: {},
  container: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100vw",
    height: "100vh",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
    position: "fixed",
    top: "0",
  },
  innerContainer: {
    position: "relative",
    width: "380px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
    gap: "10px",
    backgroundColor: Colors.success,
    color: "white",
    fontSize: "22px",
  },
  closeBtn: {
    color: "#bbb",
    position: "absolute",
    right: "15px",
    top: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  },
});
