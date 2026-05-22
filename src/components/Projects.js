import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import projects from "../static/projects";
import { profile } from "../static/profile";
import SectionHeading from "./SectionHeading";
import { Container } from "@material-ui/core";
import { colors, layout } from "../theme";

const useStyles = makeStyles({
  root: {
    padding: layout.sectionPadding,
    background: colors.bg,
    borderTop: `1px solid ${colors.border}`,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 1.5rem 2rem",
    width: "100%",
    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      maxWidth: layout.maxWidth,
    },
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Personal projects"
        subtitle={profile.projectsSubtitle}
      />
      <div className={classes.grid}>
        {projects.map((project) => (
          <ImageCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
