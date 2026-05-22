import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { motion } from "framer-motion";
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
  media: {
    height: 160,
    background: `linear-gradient(145deg, ${colors.bgElevated} 0%, ${colors.bgCardHover} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.mono,
    fontSize: "2.5rem",
    fontWeight: 700,
    color: colors.accent,
    opacity: 0.5,
    borderBottom: `1px solid ${colors.border}`,
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
    flex: 1,
  },
  link: {
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    color: colors.accent,
    textDecoration: "none",
    letterSpacing: "0.05em",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ImageCard({ project }) {
  const classes = useStyles();
  const initial = project.title.charAt(0);

  const content = (
    <motion.article
      className={classes.card}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className={classes.media} aria-hidden>
        {initial}
      </div>
      <div className={classes.body}>
        <h3 className={classes.title}>{project.title}</h3>
        <p className={classes.desc}>{project.desc}</p>
        {project.link ? (
          <span className={classes.link}>
            {project.linkLabel || "View project"} →
          </span>
        ) : null}
      </div>
    </motion.article>
  );

  return project.link ? (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      style={{ display: "block", height: "100%" }}
    >
      {content}
    </Link>
  ) : (
    content
  );
}
