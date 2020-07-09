import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "..//Buttons/Button.css";


const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "12px 32px",
    border: "1px solid",
    lineHeight: 1.5,
    fontWeight: 200,
    color: "Black",
    borderColor: "rgb(240, 200, 207)",
    backgroundColor: "rgb(240, 200, 207)",
    borderColor: "rgb(240, 200, 207)",
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
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(240, 200, 207)",
      borderColor: "rgb(240, 200, 207)",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(240, 200, 207)",
      borderColor: "rgb(240, 200, 207)"
    },
    "&:focus": {
      color: "black",
      backgroundColor: "rgb(240, 200, 207)",
      boxShadow: "0 0 0 0.2rem rgb(240, 200, 207)"
    }
  }
})(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        21.5 kW/day
      </BootstrapButton>
    </div>
  );
}
