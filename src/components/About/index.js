import React from "react";
import { useHistory } from "react-router-dom";
import {
  AboutContainer,
  AboutLogoBorder,
  AboutWrapper,
  ResumeImage,
} from "./AboutElements";
// import CvIcon from "../../images/cv3.png";

function About() {
  const history = useHistory();
  return (
    <AboutContainer id="about">
      <AboutLogoBorder>
        <button onClick={() => history.push("/")}>
          <span style={{ fontFamily: "Dancing Script" }}>NC</span>
        </button>
      </AboutLogoBorder>
      <AboutWrapper>{/* <ResumeImage src={CvIcon} /> */}</AboutWrapper>
    </AboutContainer>
  );
}

export default About;
