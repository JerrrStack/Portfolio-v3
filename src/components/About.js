import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bgElevated,
    borderTop: `1px solid ${colors.border}`,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: "3rem",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    alignItems: "start",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      textAlign: "center",
    },
  },
  photoWrap: {
    position: "relative",
  },
  photo: {
    width: 260,
    height: 260,
    borderRadius: 16,
    objectFit: "cover",
    border: `1px solid ${colors.border}`,
    boxShadow: `0 24px 48px rgba(0, 0, 0, 0.4)`,
  },
  photoAccent: {
    position: "absolute",
    inset: -8,
    borderRadius: 20,
    border: `1px solid ${colors.borderAccent}`,
    pointerEvents: "none",
  },
  body: {
    fontFamily: fonts.sans,
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: colors.textMuted,
    margin: "0 0 1.5rem",
  },
  educationCard: {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: "1.25rem 1.5rem",
    marginBottom: "1.5rem",
  },
  eduLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: colors.accent,
    marginBottom: "0.5rem",
  },
  eduDegree: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    color: colors.text,
    margin: "0 0 0.25rem",
  },
  eduSchool: {
    fontFamily: fonts.sans,
    color: colors.textMuted,
    margin: 0,
    fontSize: "0.95rem",
  },
  cvBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    textTransform: "none",
    borderRadius: 10,
    padding: "0.6rem 1.4rem",
    color: colors.accent,
    border: `1px solid ${colors.borderAccent}`,
    background: colors.accentSoft,
    "&:hover": {
      background: "rgba(34, 211, 238, 0.2)",
      borderColor: colors.accent,
    },
  },
});

function About() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root} id="about">
      <SectionHeading
        eyebrow="About"
        title={profile.aboutHeading}
        subtitle={profile.aboutSubtitle}
      />
      <div className={classes.grid}>
        <div className={classes.photoWrap}>
          <div className={classes.photoAccent} />
          <img
            className={classes.photo}
            src="/assets/me.jpg"
            alt={profile.name}
          />
        </div>
        <div>
          <p className={classes.body}>{profile.about}</p>
          <div className={classes.educationCard}>
            <div className={classes.eduLabel}>Education</div>
            <p className={classes.eduDegree}>{profile.education.degree}</p>
            <p className={classes.eduSchool}>
              {profile.education.school} · {profile.education.years}
            </p>
          </div>
          <Button
            className={classes.cvBtn}
            variant="outlined"
            href="/assets/CV/CV.pdf"
            download
            component="a"
          >
            Download résumé
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default About;
