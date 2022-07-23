import { createUseStyles } from "react-jss";
import { Colors } from "../../constant/color";

const useStyles = createUseStyles({
  layout: {
    height: "100vh",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
  },
  container: {
    margin: "0 200px",
    flexGrow: 1,
    fontFamily: "Montserrat",
    backgroundColor: "lightcoral",
    fontSize: 40,
  },
  footer: {
    height: "70px",
    backgroundColor: Colors.primary500,
    borderTopLeftRadius: "70px",
    borderTopRightRadius: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& div": {
      color: "white",
      fontSize: "20px",
    },
    padding: "0 70px",
  },
  footerIconContainer: {
    display: "flex",
  },
  footerIcon: {
    margin: "0 8    px",
    fontSize: "25px",
    // color: "white",
  },
});

export { useStyles };
