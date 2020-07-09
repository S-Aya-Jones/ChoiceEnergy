import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "12px 30px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#1b1b1b",
    borderColor: "#1b1b1b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#7f9183",
      borderColor: "#7f9183",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#7f9183",
      borderColor: "#7f9183",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #7f9183",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Link to="/EnergyControls" className="ButtonCss">
        <BootstrapButton
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Energy Tips
        </BootstrapButton>
      </Link>
    </div>
  );
}
