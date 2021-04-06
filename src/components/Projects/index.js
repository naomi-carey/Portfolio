import React from "react";
import Icon1 from "../../images/authxrs2.png";
import Icon2 from "../../images/safertravels2.png";
import Icon3 from "../../images/codecafe2.png";
import Icon4 from "../../images/mydocuments.svg";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="portfolio">
      <ProjectsH1>My Projects</ProjectsH1>

      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Authxrs Publishing House</ProjectsH2>
          <ProjectsP>
            Authors is a socially aware and sustainable publishing house app
            supporting suppressed voices worldwide.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Safer Travel</ProjectsH2>
          <ProjectsP>
            Working to restore confidence in travel during COVID by providing
            consumers access to real time data.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Code Cafe</ProjectsH2>
          <ProjectsP>
            A shared work & play place bringing your two loves together, coffee
            and coding. Like Goku an Vegeta come together but stronger.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Technical Documentation</ProjectsH2>
          <ProjectsP>
            Samples of technical documentation produced for customer facing
            audiences as well as developers, install engineers and parnters.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
