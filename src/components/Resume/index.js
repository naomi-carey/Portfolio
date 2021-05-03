import React from "react";
import { useHistory } from "react-router-dom";
import {
  ResumeContainer,
  ResumeLogoBorder,
  ResumeWrapper,
  ResumeImage,
} from "./ResumeElements";
import CvIcon from "../../images/cv3.png";

function Resume() {
  const history = useHistory();
  return (
    <ResumeContainer id="resume">
      <ResumeLogoBorder>
        <button onClick={() => history.push("/")}>
          <span style={{ fontFamily: "Dancing Script" }}>NC</span>
        </button>
      </ResumeLogoBorder>
      <ResumeWrapper>
        <ResumeImage src={CvIcon} />
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume;
