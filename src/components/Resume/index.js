import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ResumeContainer,
  ResumeLogoBorder,
  ResumeWrapper,
  ResumeImage,
} from "./ResumeElements";
import CvIcon from "../../images/cv3.png";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1.0,
    },
  },
};

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
        <ResumeImage
          className="base container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          src={CvIcon}
        />

        {/* <ResumeImage
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.2, duration: 1.0 }}
          src={CvIcon}
        /> */}
      </ResumeWrapper>
    </ResumeContainer>
  );
}

export default Resume;
