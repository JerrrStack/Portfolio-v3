import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: layout.maxWidth,
    margin: "0 auto 2rem",
    padding: "0 1.5rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "0.75rem",
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: "1rem",
    fontWeight: 600,
    color: colors.text,
    margin: 0,
  },
  value: {
    fontFamily: fonts.mono,
    fontSize: "0.8rem",
    color: colors.accent,
  },
  track: {
    height: 6,
    borderRadius: 999,
    background: colors.bgCard,
    overflow: "hidden",
    marginBottom: "1rem",
  },
  bar: {
    height: "100%",
    borderRadius: 999,
    background: colors.gradient,
    transition: "width 1s ease",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  chip: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    color: colors.textMuted,
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 6,
    padding: "0.35rem 0.65rem",
  },
});

function SkillBlock({ tools, progressName, progressValue }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3 className={classes.name}>{progressName}</h3>
        <span className={classes.value}>{progressValue}%</span>
      </div>
      <div className={classes.track}>
        <div className={classes.bar} style={{ width: `${progressValue}%` }} />
      </div>
      <div className={classes.chips}>
        {tools.map((tool) => (
          <span key={tool} className={classes.chip}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillBlock;
