import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { colors, fonts } from "../theme";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 14,
    overflow: "hidden",
    transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
    "&:hover": {
      borderColor: colors.borderAccent,
      transform: "translateY(-4px)",
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px ${colors.borderAccent}`,
    },
  },
  mediaWrap: {
    position: "relative",
    height: 180,
    overflow: "hidden",
    borderBottom: `1px solid ${colors.border}`,
    background: `linear-gradient(145deg, ${colors.bgElevated} 0%, ${colors.bgCardHover} 100%)`,
  },
  mediaImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  mediaFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.mono,
    fontSize: "2.5rem",
    fontWeight: 700,
    color: colors.accent,
    opacity: 0.5,
  },
  body: {
    padding: "1.35rem 1.5rem 1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: fonts.sans,
    fontSize: "1.05rem",
    fontWeight: 700,
    color: colors.text,
    margin: "0 0 0.6rem",
    lineHeight: 1.35,
  },
  desc: {
    fontFamily: fonts.sans,
    fontSize: "0.9rem",
    lineHeight: 1.6,
    color: colors.textMuted,
    margin: "0 0 1rem",
  },
  techLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: colors.textDim,
    margin: "0 0 0.5rem",
  },
  techWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    marginBottom: "1.25rem",
    flex: 1,
  },
  techChip: {
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    color: colors.textMuted,
    border: `1px solid ${colors.border}`,
    borderRadius: 4,
    padding: "0.25rem 0.5rem",
  },
  actions: {
    marginTop: "auto",
  },
  viewBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.85rem",
    textTransform: "none",
    borderRadius: 8,
    padding: "0.5rem 1rem",
    color: colors.bg,
    background: colors.gradient,
    alignSelf: "flex-start",
    "&:hover": {
      opacity: 0.92,
      background: colors.gradient,
    },
  },
  cardSoon: {
    borderStyle: "dashed",
    opacity: 0.92,
    "&:hover": {
      transform: "none",
      boxShadow: "none",
    },
  },
  soonBadge: {
    fontFamily: fonts.mono,
    fontSize: "0.72rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: colors.textMuted,
    border: `1px solid ${colors.border}`,
    borderRadius: 6,
    padding: "0.45rem 0.75rem",
    alignSelf: "flex-start",
  },
  soonMedia: {
    fontFamily: fonts.mono,
    fontSize: "0.85rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: colors.textDim,
  },
});

export default function ImageCard({ project }) {
  const classes = useStyles();
  const initial = project.title.charAt(0);
  const [imgError, setImgError] = useState(false);
  const showImage = project.imageUrl && !imgError;
  const isSoon = project.comingSoon;

  return (
    <article
      className={`${classes.card} ${isSoon ? classes.cardSoon : ""}`}
    >
      <div className={classes.mediaWrap}>
        {isSoon ? (
          <div className={classes.mediaFallback}>
            <span className={classes.soonMedia}>Coming soon</span>
          </div>
        ) : showImage ? (
          <img
            className={classes.mediaImg}
            src={project.imageUrl}
            alt={project.title}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={classes.mediaFallback} aria-hidden>
            {initial}
          </div>
        )}
      </div>
      <div className={classes.body}>
        <h3 className={classes.title}>{project.title}</h3>
        <p className={classes.desc}>{project.desc}</p>
        {project.technologies && project.technologies.length > 0 && (
          <>
            <div className={classes.techLabel}>Technologies used</div>
            <div className={classes.techWrap}>
              {project.technologies.map((tech) => (
                <span key={tech} className={classes.techChip}>
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
        <div className={classes.actions}>
          {isSoon ? (
            <span className={classes.soonBadge}>In progress</span>
          ) : (
            project.link && (
              <Button
                className={classes.viewBtn}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
                disableElevation
                endIcon={<OpenInNewIcon style={{ fontSize: 16 }} />}
              >
                {project.linkLabel || "View project"}
              </Button>
            )
          )}
        </div>
      </div>
    </article>
  );
}
