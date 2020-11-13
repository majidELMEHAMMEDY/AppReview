import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 2,
    marginTop: 5
  },
  colorPrimary: {
    backgroundColor: "transparent"
  },
  bar: {
    borderRadius: 0,
    backgroundColor: "gray"
  }
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function CustomizedProgressBars({value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  );
}
