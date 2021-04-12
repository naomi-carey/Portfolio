import React from "react";
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeImage,
  ResumeIcon,
} from "./ResumeElements";
import CvIcon from "../../images/cv2.png";

function Resume() {
  return (
    <>
      <ResumeContainer id="/resume">
        <ResumeIcon to="/">Home</ResumeIcon>

        <ResumeWrapper>
          <ResumeImage src={CvIcon} />
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
}

export default Resume;
