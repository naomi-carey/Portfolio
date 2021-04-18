import React from "react";
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeImage,
  ResumeIcon,
  ResumeLogoBorder,
} from "./ResumeElements";
import CvIcon from "../../images/cv2.png";

function Resume() {
  return (
    <>
      <ResumeContainer id="/resume">
        <ResumeIcon to="/">
          <ResumeLogoBorder>
            <button>
              <span style={{ fontFamily: "Dancing Script" }}>NC</span>
            </button>
          </ResumeLogoBorder>
        </ResumeIcon>

        <ResumeWrapper>
          <ResumeImage src={CvIcon} />
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
}

export default Resume;
