import { createUseStyles } from "react-jss";

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className="imgLogo" src={require("../assets/images/logoWeb.png")} />
    </div>
  );
};

export default Logo;

const useStyles = createUseStyles({
  container: {
    width: "200px",
    height: "100px",
});
