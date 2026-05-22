import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { profile } from "../static/profile";
import { colors, fonts } from "../theme";

const useStyle = makeStyles({
  root: {
    background: colors.bg,
    borderTop: `1px solid ${colors.border}`,
    padding: "2.5rem 1.5rem",
  },
  inner: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1.5rem",
  },
  brand: {
    fontFamily: fonts.sans,
    fontWeight: 700,
    fontSize: "1rem",
    color: colors.text,
    "& span": { color: colors.accent },
  },
  copy: {
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    color: colors.textDim,
    margin: 0,
  },
  socMedia: {
    display: "flex",
    gap: "0.25rem",
  },
  iconBtn: {
    color: colors.textMuted,
    "&:hover": {
      color: colors.accent,
      background: colors.accentSoft,
    },
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <Container maxWidth={false} className={classes.root}>
      <div className={classes.inner}>
        <div>
          <div className={classes.brand}>
            {profile.shortName} <span>Bernal</span>
          </div>
          <p className={classes.copy}>
            © {new Date().getFullYear()} {profile.name} · {profile.title}
          </p>
        </div>
        <div className={classes.socMedia}>
          <Button
            className={classes.iconBtn}
            href={profile.emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            aria-label="email via Gmail"
          >
            <EmailIcon />
          </Button>
          <Button
            className={classes.iconBtn}
            target="_blank"
            rel="noopener noreferrer"
            href={profile.github}
            component="a"
            aria-label="github"
          >
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
