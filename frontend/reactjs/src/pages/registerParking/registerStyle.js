import { createUseStyles } from "react-jss";
import { Colors } from "../../constant/color";

const useStyles = createUseStyles({
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lemonchiffon",
    justifyContent: "center",
    gap: "20px",
  },
  container: {
    marginTop: "10px",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  title: {
    alignSelf: "center",
    padding: "15px",
    backgroundColor: Colors.primary500,
    "& h1": {
      color: "white",
    },
    borderRadius: "5px",
  },
});

export { useStyles };
