import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ResumeContainer,
  ResumeLogoBorder,
  ResumeWrapper,
  ResumeImage,
} from "./ResumeElements";
import CvIcon from "../../images/cv.png";

function Resume() {
  const history = useHistory();
  return (
    <ResumeContainer id="resume">
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 120,
        }}
      >
        <ResumeLogoBorder>
          <button onClick={() => history.push("/")}>
            <span style={{ fontFamily: "Dancing Script" }}>NC</span>
          </button>
        </ResumeLogoBorder>
      </motion.div>
      <ResumeWrapper>
        <ResumeImage src={CvIcon} />
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume;
