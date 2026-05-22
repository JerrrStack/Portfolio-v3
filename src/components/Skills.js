import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import LinearProgress from "./LinearProgress";
import SectionHeading from "./SectionHeading";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  skillsSection: {
    padding: layout.sectionPadding,
    background: colors.bg,
    borderTop: `1px solid ${colors.border}`,
  },
  experienceSection: {
    padding: layout.sectionPadding,
    background: colors.bgElevated,
    borderTop: `1px solid ${colors.border}`,
  },
  timeline: {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 1.5rem",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "1.5rem",
      top: 0,
      bottom: 0,
      width: 2,
      background: `linear-gradient(180deg, ${colors.accent}, transparent)`,
      "@media (max-width: 700px)": {
        left: 8,
      },
    },
  },
  jobCard: {
    position: "relative",
    marginLeft: "2.5rem",
    marginBottom: "2.5rem",
    padding: "1.5rem 1.75rem",
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 14,
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      borderColor: colors.borderAccent,
      boxShadow: `0 12px 40px rgba(0, 0, 0, 0.25)`,
    },
    "@media (max-width: 700px)": {
      marginLeft: "1.75rem",
      padding: "1.25rem",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-2.05rem",
      top: "1.6rem",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: colors.accent,
      boxShadow: `0 0 12px ${colors.accentGlow}`,
      border: `3px solid ${colors.bgElevated}`,
      "@media (max-width: 700px)": {
        left: "-1.35rem",
      },
    },
  },
  role: {
    fontFamily: fonts.sans,
    fontSize: "1.15rem",
    fontWeight: 700,
    color: colors.text,
    margin: "0 0 0.25rem",
  },
  company: {
    fontFamily: fonts.sans,
    fontSize: "0.95rem",
    color: colors.textMuted,
    margin: "0 0 0.5rem",
  },
  period: {
    display: "inline-block",
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    color: colors.accent,
    background: colors.accentSoft,
    border: `1px solid ${colors.borderAccent}`,
    borderRadius: 6,
    padding: "0.25rem 0.6rem",
    marginBottom: "1rem",
  },
  highlight: {
    fontFamily: fonts.sans,
    fontSize: "0.95rem",
    lineHeight: 1.65,
    color: colors.textMuted,
    margin: "0.35rem 0",
  },
  techWrap: {
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  techChip: {
    fontFamily: fonts.mono,
    fontSize: "0.68rem",
    color: colors.textDim,
    border: `1px solid ${colors.border}`,
    borderRadius: 4,
    padding: "0.2rem 0.5rem",
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={false} className={classes.skillsSection} id="skills">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & stack"
          subtitle={profile.skillsSubtitle}
        />
        {profile.skillCategories.map((category) => (
          <LinearProgress
            key={category.progressName}
            progressValue={category.progressValue}
            tools={category.tools}
            progressName={category.progressName}
          />
        ))}
      </Container>

      <Container maxWidth={false} className={classes.experienceSection}>
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          subtitle={profile.experienceSubtitle}
        />
        <div className={classes.timeline}>
          {profile.workExperience.map((job) => (
            <article
              key={`${job.role}-${job.period}`}
              className={classes.jobCard}
            >
              <h3 className={classes.role}>{job.role}</h3>
              <p className={classes.company}>{job.company}</p>
              <span className={classes.period}>{job.period}</span>
              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {job.highlights.map((item) => (
                  <li key={item} className={classes.highlight}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={classes.techWrap}>
                {job.technologies.map((tech) => (
                  <span key={tech} className={classes.techChip}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Skills;
