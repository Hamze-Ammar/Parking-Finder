import { createUseStyles } from "react-jss";
import { Colors } from "../../constant/color";

const useStyles = createUseStyles({
  layout: {
    height: "100vh",
    // backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    alignContent: "stretch",
    color: Colors.fontPrimary,
  },
  container: {
    margin: "0 150px",
    // flexGrow: 1,
    fontFamily: "Montserrat",
    // backgroundColor: "lightcoral",
    fontSize: "60px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignContent: "stretch",
  },
  body: {
    flexWrap: "wrap",
    // marginTop: "40px",
    display: "flex",
    // height: "80vh",
    alignContent: "stretch",

    justifyContent: "space-between",
  },
  header: {
    height: "40px",
  },
  login: {
    fontWeight: "500",
    color: Colors.primary500,
    textAlign: "right",
  },
  bodyLeft: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    display: "flex",
    flexDirection: "column",
    alignContent: "stretch",
    // margin: "40px 0",
    justifyContent: "space-between",
    gap: "40px",
    // backgroundColor: "gray",
  },
  bodyLeftLink: {
    // margin: "40px 0",
    fontSize: "20px",
  },
  rightContainer: {
    fontSize: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    justifyContent: "space-between",
    // heigh: "80vh",
    minHeight: "80vh",
  },
  footer: {
    height: "70px",
    // alignSelf: "end",
    // alignSelf: "flex-end",
    backgroundColor: Colors.primary500,
    borderTopLeftRadius: "90px",
    borderTopRightRadius: "90px",
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
    margin: "0 8px",
    fontSize: "25px",
  },
  bold: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "38px",
  },
  rightBottom: {
    marginTop: "60px",
    paddingTop: "60px",
    display: "flex",
  },
  logosContainer: {
    marginLeft: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  slideShowContainer: {
    // alignSelf: "center",
    width: "280px",
    height: "600px",
    // backgroundColor: "red",
    // backgroundSize: "cover",
    borderRadius: "20px",
  },
  register: {
    color: Colors.primary500,
  },
});

export { useStyles };
