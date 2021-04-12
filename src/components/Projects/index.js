import React from "react";
import Icon1 from "../../images/authxrs2.png";
import Icon2 from "../../images/safertravels2.png";
import Icon3 from "../../images/codecafe2.png";
import Icon4 from "../../images/mydocuments.svg";
import { useHistory } from "react-router-dom";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectButton,
} from "./ProjectsElements";

const Projects = () => {
  // let history = useHistory();
  // const routeChange = () => {
  //   let path = `https://the-authors.netlify.app/`;

  //   history.push(path);
  // };

  return (
    <ProjectsContainer id="portfolio">
      <ProjectsH1>My Projects</ProjectsH1>

      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Authxrs Publishing House</ProjectsH2>
          <ProjectsP>React.js / Node.js / Styled Components</ProjectsP>

          <ProjectButton href={"https://the-authors.netlify.app/"}>
            View the site
          </ProjectButton>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Safer Travel</ProjectsH2>
          <ProjectsP>React.js / Hooks / CSS</ProjectsP>

          <ProjectButton href="https://zen-albattani-4c735b.netlify.app">
            View the site
          </ProjectButton>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Code Cafe</ProjectsH2>

          <ProjectsP>JavaScript / HTML / CSS</ProjectsP>
          <ProjectButton href="https://heuristic-payne-285218.netlify.app">
            View the site
          </ProjectButton>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Technical Documentation</ProjectsH2>
          <ProjectsP>Samples of technical documentation.</ProjectsP>
          <ProjectButton href="https://safejourneys.atlassian.net/wiki/spaces/AD/pages/201588744/Integrate+Stripe+payment+system+into+React">
            Learn more
          </ProjectButton>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
