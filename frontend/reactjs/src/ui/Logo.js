import { createUseStyles } from "react-jss";

const Logo = () => {
  const classes = useStyles();

  return (
    <img className="imgLogo" src={require("../assets/images/logoWeb.png")} />
  );
};

export default Logo;

const useStyles = createUseStyles({});
