import React from "react";
import Icon1 from "../../images/authxrs2.png";
import Icon2 from "../../images/safertravels2.png";
import Icon3 from "../../images/codecafe.png";
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
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Authxrs Publishing House</ProjectsH2>
          <ProjectsP>
            Authors is a socially aware and sustainable publishing house
            supporting suppressed voices worldwide.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Safer Travel</ProjectsH2>
          <ProjectsP>
            Working to restore confidence in travel during the COVID pandemic by
            providing consumers access to data that really matters when they
            need it.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Code Cafe</ProjectsH2>
          <ProjectsP>
            A shared work & play place bringing your two loves together, coffee
            and coding. This is a place of exception, where coffee and code
            fusion (like Goku an Vegeta come together but stronger).
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
