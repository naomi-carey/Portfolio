import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { projects } from "./data";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH2,
  ProjectsP,
  ProjectButton,
  EventWrapper,
} from "./ProjectsElements";
const Projects = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (link) => {
    const win = window.open(link);
    win.focus();
  };
  const handleOnMouseEnter = () => {
    setIsFlipped((prev) => !prev);
  };
  const handleOnMouseLeave = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <EventWrapper
      onMouseEnter={() => {
        !isFlipped && handleOnMouseEnter();
      }}
      onMouseLeave={() => {
        isFlipped && handleOnMouseLeave();
      }}
    >
      <ReactCardFlip
        cardZIndex={index.toString()}
        isFlipped={isFlipped}
        // isFlipped={(index===3 || index===1) && true}
        flipDirection="horizontal"
      >
        <ProjectsCard>{project.image()}</ProjectsCard>
        <ProjectsCard>
          <ProjectsH2>{project.title}</ProjectsH2>
          <ProjectsP>{project.desc}</ProjectsP>
          <ProjectButton onClick={() => handleClick(project.link)}>
            {project.button}
          </ProjectButton>
        </ProjectsCard>
      </ReactCardFlip>
    </EventWrapper>
  );
};
const ProjectsMap = () => {
  return (
    <ProjectsContainer id="portfolio">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        {projects.map((item, index) => (
          <Projects index={index} project={item} key={`card-${index}`} />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};
export default ProjectsMap;
