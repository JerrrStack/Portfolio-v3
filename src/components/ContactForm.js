import React, { useState, useEffect } from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { toast } from "react-toastify";
import CssTextField from "./CssTextField";
import SectionHeading from "./SectionHeading";
import { profile, gmailComposeUrl } from "../static/profile";
import { colors, fonts, layout } from "../theme";

const styles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bgElevated,
    borderTop: `1px solid ${colors.border}`,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.1fr",
    gap: "3rem",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0 1.5rem",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  infoCard: {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 14,
    padding: "2rem",
  },
  infoTitle: {
    fontFamily: fonts.sans,
    fontSize: "1.25rem",
    fontWeight: 700,
    color: colors.text,
    margin: "0 0 1.5rem",
  },
  infoRow: {
    marginBottom: "1.25rem",
  },
  infoLabel: {
    fontFamily: fonts.mono,
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: colors.textDim,
    marginBottom: "0.35rem",
  },
  infoValue: {
    fontFamily: fonts.sans,
    fontSize: "1rem",
    color: colors.text,
    "& a": {
      color: colors.accent,
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
  },
  formCard: {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: 14,
    padding: "2rem",
  },
  field: {
    marginBottom: "1rem",
  },
  formHint: {
    fontFamily: fonts.sans,
    fontSize: "0.85rem",
    color: colors.textMuted,
    margin: "0 0 1rem",
    lineHeight: 1.5,
  },
  btnStyle: {
    paddingTop: "0.5rem",
  },
  sendBtn: {
    fontFamily: fonts.sans,
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "none",
    borderRadius: 10,
    padding: "0.65rem 2rem",
    color: colors.bg,
    background: colors.gradient,
    border: "none",
    boxShadow: `0 8px 24px ${colors.accentGlow}`,
    "&:hover": {
      opacity: 0.92,
      background: colors.gradient,
    },
    "&:disabled": {
      opacity: 0.5,
      color: colors.bg,
    },
  },
  cssLabel: {
    color: colors.textMuted,
    fontFamily: fonts.sans,
    fontSize: "0.9rem",
    width: "100%",
  },
  cssFocused: {},
});

function ContactForm() {
  const [checkInputs, setCheckInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState(false);
  const { name, email, subject, message } = checkInputs;

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setCheckInputs((prev) => ({ ...prev, [field]: value }));
    setErrors(false);
  };

  const [sendDisabled, setSendDisabled] = useState(true);

  useEffect(() => {
    const isInputs = Object.values({ name, email, subject, message }).every(
      Boolean
    );
    setSendDisabled(!isInputs);
  }, [name, email, subject, message]);

  const classes = styles();

  const sendEmail = (e) => {
    e.preventDefault();
    if (sendDisabled) {
      setErrors(true);
      return;
    }

    const mailSubject =
      subject.trim() || `Portfolio message from ${name.trim()}`;
    const mailBody = [
      `Name: ${name.trim()}`,
      `Reply-to: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const composeUrl = gmailComposeUrl({
      to: profile.email,
      subject: mailSubject,
      body: mailBody,
    });

    const opened = window.open(composeUrl, "_blank", "noopener,noreferrer");

    if (opened) {
      toast.success(
        "Gmail opened — review your message and click Send when you're ready."
      );
      setCheckInputs({ name: "", email: "", subject: "", message: "" });
      setErrors(false);
    } else {
      toast.error(
        "Pop-up blocked. Allow pop-ups for this site, or use the email link on the left."
      );
    }
  };

  const fieldProps = {
    fullWidth: true,
    variant: "outlined",
    onChange: handleChange,
    InputLabelProps: {
      classes: { root: classes.cssLabel, focused: classes.cssFocused },
    },
    InputProps: {
      classes: { root: classes.cssLabel },
      style: {
        color: colors.text,
        fontFamily: fonts.sans,
        background: colors.bgElevated,
        borderRadius: 8,
      },
    },
  };

  return (
    <Container maxWidth={false} className={classes.root} id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Open to full-time roles, contract work, and conversations about new paths in tech."
      />
      <div className={classes.layout}>
        <div className={classes.infoCard}>
          <h3 className={classes.infoTitle}>Direct contact</h3>
          <div className={classes.infoRow}>
            <div className={classes.infoLabel}>Location</div>
            <div className={classes.infoValue}>{profile.location}</div>
          </div>
          <div className={classes.infoRow}>
            <div className={classes.infoLabel}>Email</div>
            <div className={classes.infoValue}>
              <a
                href={profile.emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.email}
              </a>
              <p
                style={{
                  margin: "0.6rem 0 0",
                  fontSize: "0.9rem",
                  lineHeight: 1.55,
                  color: colors.textMuted,
                }}
              >
                {profile.contactPreference}
              </p>
            </div>
          </div>
          <div className={classes.infoRow}>
            <div className={classes.infoLabel}>GitHub</div>
            <div className={classes.infoValue}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{profile.githubHandle}
              </a>
            </div>
          </div>
          <div className={classes.infoRow}>
            <div className={classes.infoLabel}>LinkedIn</div>
            <div className={classes.infoValue}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/john-jerome-bernal-561821212
              </a>
            </div>
          </div>
        </div>

        <div className={classes.formCard}>
          <p className={classes.formHint}>
            Fill out the form and we&apos;ll open Gmail with your message
            ready—you send it from your own account.
          </p>
          <form id="contact-form" onSubmit={sendEmail} noValidate autoComplete="on">
            <div className={classes.field}>
              <CssTextField
                label="Name"
                name="name"
                value={name}
                required
                {...fieldProps}
              />
            </div>
            <div className={classes.field}>
              <CssTextField
                type="email"
                label="Your email"
                name="email"
                value={email}
                required
                {...fieldProps}
              />
            </div>
            <div className={classes.field}>
              <CssTextField
                label="Subject"
                name="subject"
                value={subject}
                required
                {...fieldProps}
              />
            </div>
            <div className={classes.field}>
              <CssTextField
                label="Message"
                name="message"
                value={message}
                required
                multiline
                rows={4}
                {...fieldProps}
              />
            </div>
            {errors && (
              <Alert variant="filled" severity="error" style={{ marginBottom: 12 }}>
                Please fill in all fields.
              </Alert>
            )}
            <div className={classes.btnStyle}>
              <Button
                className={classes.sendBtn}
                type="submit"
                disableElevation
                disabled={sendDisabled}
              >
                Send via Gmail
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactForm;
