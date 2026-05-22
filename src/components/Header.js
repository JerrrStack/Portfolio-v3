import React, { useState, useEffect } from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { profile } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 48,
    overflow: "hidden",
    background: colors.bg,
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: colors.heroGlow,
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: 480,
      height: 480,
      right: "-12%",
      top: "10%",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
      pointerEvents: "none",
    },
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: layout.maxWidth,
    width: "100%",
    padding: "0 1.5rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: fonts.mono,
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: colors.accent,
    background: colors.accentSoft,
    border: `1px solid ${colors.borderAccent}`,
    borderRadius: 999,
    padding: "0.4rem 1rem",
    marginBottom: "1.5rem",
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    margin: "0 0 1rem",
    background: colors.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: {
    fontFamily: fonts.sans,
    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
    fontWeight: 500,
    color: colors.text,
    margin: "0 0 0.35rem",
  },
  titleNote: {
    fontFamily: fonts.sans,
    fontSize: "1rem",
    fontWeight: 500,
    color: colors.textMuted,
    margin: "0 0 1rem",
  },
  tagline: {
    fontFamily: fonts.sans,
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: colors.textMuted,
    maxWidth: 560,
    margin: "0 0 2rem",
  },
  meta: {
    fontFamily: fonts.mono,
    fontSize: "0.85rem",
    color: colors.textDim,
    marginBottom: "2.5rem",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "3.5rem",
  },
  primaryBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "none",
    borderRadius: 10,
    padding: "0.65rem 1.5rem",
    color: colors.bg,
    background: colors.gradient,
    boxShadow: `0 8px 32px ${colors.accentGlow}`,
    "&:hover": {
      opacity: 0.9,
      background: colors.gradient,
    },
  },
  secondaryBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "none",
    borderRadius: 10,
    padding: "0.65rem 1.5rem",
    color: colors.text,
    border: `1px solid ${colors.border}`,
    background: colors.bgCard,
    "&:hover": {
      background: colors.bgCardHover,
      borderColor: colors.borderAccent,
    },
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    maxWidth: 960,
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  statCard: {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    padding: "1.35rem 1.15rem",
    textAlign: "left",
    transition: "border-color 0.2s ease, transform 0.2s ease",
    "&:hover": {
      borderColor: colors.borderAccent,
      transform: "translateY(-2px)",
    },
  },
  statValue: {
    fontFamily: fonts.sans,
    fontSize: "1.65rem",
    fontWeight: 800,
    color: colors.accent,
    lineHeight: 1.15,
    marginBottom: 8,
  },
  statLabel: {
    fontFamily: fonts.sans,
    fontSize: "0.88rem",
    fontWeight: 600,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 1.3,
  },
  statDetail: {
    fontFamily: fonts.sans,
    fontSize: "0.78rem",
    lineHeight: 1.55,
    color: colors.textMuted,
    margin: 0,
  },
  scrollHint: {
    position: "absolute",
    bottom: 24,
    left: "50%",
    transform: "translateX(-50%)",
    color: colors.textDim,
    animation: "$bounce 2s ease infinite",
  },
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
    "50%": { transform: "translateX(-50%) translateY(6px)" },
  },
});

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <NavBar />
      <Container className={classes.inner}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={checked ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={classes.badge}>
            {profile.yearsExperience}+ years of experience · {profile.experienceRange}
          </div>
          <h1 className={classes.name}>{profile.name}</h1>
          <p className={classes.title}>{profile.title}</p>
          {profile.titleNote && (
            <p className={classes.titleNote}>{profile.titleNote}</p>
          )}
          <p className={classes.tagline}>{profile.tagline}</p>
          <p className={classes.meta}>
            {profile.location} ·{" "}
            <a
              href={profile.emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {profile.email}
            </a>{" "}
            ·{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.accent, textDecoration: "none" }}
            >
              github.com/{profile.githubHandle}
            </a>
          </p>

          <div className={classes.actions}>
            <Scroll to="projects" smooth={true} offset={-72}>
              <Button className={classes.primaryBtn} disableElevation>
                View work
              </Button>
            </Scroll>
            <Scroll to="contact" smooth={true} offset={-72}>
              <Button className={classes.secondaryBtn} disableElevation>
                Get in touch
              </Button>
            </Scroll>
            <Button
              className={classes.secondaryBtn}
              disableElevation
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              GitHub
            </Button>
            <Button
              className={classes.secondaryBtn}
              disableElevation
              href="/assets/CV/CV.pdf"
              download
              component="a"
            >
              Download CV
            </Button>
          </div>

          <div className={classes.stats}>
            {profile.stats.map((stat) => (
              <div key={stat.label} className={classes.statCard}>
                <div className={classes.statValue}>{stat.value}</div>
                <div className={classes.statLabel}>{stat.label}</div>
                {stat.detail && (
                  <p className={classes.statDetail}>{stat.detail}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      <Scroll to="about" smooth={true} offset={-72}>
        <div className={classes.scrollHint} style={{ cursor: "pointer" }}>
          <KeyboardArrowDownIcon />
        </div>
      </Scroll>
    </div>
  );
}

export default Header;
