import React from "react";
import {
  ResumeContainer,
  ResumeH1,
  ResumeWrapper,
  ResumeImage,
  ResumeIcon,
} from "./ResumeElements";
import CvIcon from "../../images/cv2.png";

function Resume() {
  return (
    <>
      <ResumeContainer>
        <ResumeIcon to="/">Home</ResumeIcon>

        <ResumeWrapper>
          {/* <ResumeH1>My Resume / CV</ResumeH1> */}
          <ResumeImage src={CvIcon} />
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
}

export default Resume;
