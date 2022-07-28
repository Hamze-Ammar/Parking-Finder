import { createUseStyles } from "react-jss";
import { Colors } from "../../constant/color";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    // alignContent: "stretch",
    color: Colors.fontPrimary,
  },
  container: {
    fontFamily: "Montserrat",
    fontSize: "58px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignContent: "stretch",
    paddingBottom: "50px",
  },
  body: {
    display: "flex",
    flexWrap: "wrap",
    margin: "90px 150px 0 150px",
    gap: "25px",
    justifyContent: "space-between",
  },
  header: {
    height: "40px",
    padding: "20px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  login: {
    fontSize: "24px",
    fontWeight: "500",
    textAlign: "right",
    marginBottom: "20px",
  },
  bodyLeft: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  bodyLeftLink: {
    fontSize: "20px",
  },
  rightContainer: {
    fontSize: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    justifyContent: "flex-end",
  },
  footer: {
    height: "70px",
    position: "fixed",
    minWidth: "100vw",
    bottom: "0",
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
    fontSize: "36px",
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
    width: "330px",
    borderRadius: "20px",
  },
  register: {
    color: Colors.primary500,
    cursor: "pointer",
  },
});

export { useStyles };
