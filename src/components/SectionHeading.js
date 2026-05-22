import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: colors.accent,
    marginBottom: "0.75rem",
  },
  title: {
    fontFamily: fonts.sans,
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: 700,
    color: colors.text,
    margin: "0 0 0.75rem",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontFamily: fonts.sans,
    fontSize: "1.05rem",
    color: colors.textMuted,
    maxWidth: 560,
    margin: "0 auto",
    lineHeight: 1.6,
  },
});

function SectionHeading({ eyebrow, title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {eyebrow && <div className={classes.eyebrow}>{eyebrow}</div>}
      <h2 className={classes.title}>{title}</h2>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
